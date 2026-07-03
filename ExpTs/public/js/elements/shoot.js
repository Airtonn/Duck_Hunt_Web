import { consumeBullet, reload, getAmmo, emptyAmmo } from './ammo.js';
import { dogs } from './dog.js';
import { duck, duckPos } from './duck.js';

const BULLET_SPEED = 15;
const BULLET_SIZE = 15;
const RELOAD_TIME = 1000;

const COLORS = {
  "duck": "#38cdff",
  "hunter": "#ff5252"
};

// Array com todos os projéteis ativos na tela
export const bullets = [];

let isReloading = false;

function startReload() {
  isReloading = true;
  setTimeout(() => {
    reload();
    isReloading = false;
  }, RELOAD_TIME);
}

export function triggerPenaltyReload() {
  if (isReloading) return;
  emptyAmmo();
  startReload();
}

export function isShooterReloading() { return isReloading; }
export function getShooterAmmo() { return getAmmo(); }

export function spawnBullet(mouseX, mouseY, shooterPos, width, height, shooter) {
  if (isReloading || getAmmo() === 0) return;

  consumeBullet();
  if (getAmmo() === 0) startReload();

  // Fallback para compatibilidade caso os parâmetros do atirador não sejam informados
  const pos = shooterPos || duckPos;
  const w = width || duck.offsetWidth  || 100;  // Solucao 3: tamanho real do pato
  const h = height || duck.offsetHeight || 100; // Solucao 3: tamanho real do pato
  const type = shooter || "duck";

  const startX = pos.posX + w / 2;
  const startY = pos.posY + h / 2;
  const dx = mouseX - startX;
  const dy = mouseY - startY;
  const dist = Math.hypot(dx, dy);

  if (dist === 0) return;   // clicou exatamente no pato – ignora

  const vx = (dx / dist) * BULLET_SPEED;
  const vy = (dy / dist) * BULLET_SPEED;

  // Cria elemento <div> para o projétil
  const el = document.createElement("div");
  el.classList.add("bullet", `bullet--${type}`);
  el.style.width = BULLET_SIZE + "px";
  el.style.height = BULLET_SIZE + "px";
  el.style.left = (startX - BULLET_SIZE / 2) + "px";
  el.style.top = (startY - BULLET_SIZE / 2) + "px";
  el.style.backgroundColor = COLORS[type] ?? "#fff";
  document.body.appendChild(el);

  bullets.push({
    el,
    x: startX - BULLET_SIZE / 2,
    y: startY - BULLET_SIZE / 2,
    vx,
    vy,
    shooter: type
  });
}

//Atualiza todos os projéteis (chamado no game loop) ────────
export function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i];
    b.x += b.vx;
    b.y += b.vy;

    b.el.style.left = b.x + "px";
    b.el.style.top = b.y + "px";

    if (b.x < -BULLET_SIZE || b.x > window.innerWidth + BULLET_SIZE ||
      b.y < -BULLET_SIZE || b.y > window.innerHeight + BULLET_SIZE) {
      b.el.remove();
      bullets.splice(i, 1);
    }
  }
}

export function resetBullets() {
  bullets.forEach(b => {
    if (b.el) b.el.remove();
  });
  bullets.length = 0;
  isReloading = false;
  reload(); // Reset ammo count to full
}

// O evento mousedown foi movido para o nível (level3.js) para suportar pause e evitar tiros indesejados ao clicar nos botões do menu.
