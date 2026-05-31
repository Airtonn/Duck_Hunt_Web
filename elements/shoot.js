import { consumeBullet, reload, getAmmo } from './ammo.js';

const BULLET_SPEED     = 15;
const BULLET_SIZE      = 15;
const RELOAD_TIME      = 4000;

const COLORS = {
  "duck":   "#38cdff",
  "hunter": "#ff5252"
};

export const bullets = [];

let isReloading = false;

function startReload() {
  isReloading = true;
  setTimeout(() => {
    reload();
    isReloading = false;
  }, RELOAD_TIME);
}

export function isShooterReloading() { return isReloading; }
export function getShooterAmmo()     { return getAmmo(); }

export function spawnBullet(mouseX, mouseY, shooterPos, width, height, shooter) {
  if (isReloading || getAmmo() === 0) return;
  consumeBullet();
  if (getAmmo() === 0) startReload();

  const startX = shooterPos.posX + width  / 2;
  const startY = shooterPos.posY + height / 2;
  const dx   = mouseX - startX;
  const dy   = mouseY - startY;
  const dist = Math.hypot(dx, dy);
  if (dist === 0) return;

  const vx = (dx / dist) * BULLET_SPEED;
  const vy = (dy / dist) * BULLET_SPEED;

  const el = document.createElement("div");
  el.classList.add("bullet", `bullet--${shooter}`);
  el.style.width           = BULLET_SIZE + "px";
  el.style.height          = BULLET_SIZE + "px";
  el.style.left            = (startX - BULLET_SIZE / 2) + "px";
  el.style.top             = (startY - BULLET_SIZE / 2) + "px";
  el.style.backgroundColor = COLORS[shooter] ?? "#fff";
  document.body.appendChild(el);

  bullets.push({ el, x: startX - BULLET_SIZE / 2,
                     y: startY - BULLET_SIZE / 2,
                     vx, vy, shooter });
}

export function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i];
    b.x += b.vx;
    b.y += b.vy;
    b.el.style.left = b.x + "px";
    b.el.style.top  = b.y + "px";

    if (b.x < -BULLET_SIZE || b.x > window.innerWidth  + BULLET_SIZE ||
        b.y < -BULLET_SIZE || b.y > window.innerHeight + BULLET_SIZE) {
      b.el.remove();
      bullets.splice(i, 1);
    }
  }
}