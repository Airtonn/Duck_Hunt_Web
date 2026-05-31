const BULLET_SPEED = 15;
const BULLET_SIZE  = 15;

const COLORS = {
    "duck":   "#38cdff", // azul claro
    "hunter": "#ff5252"  // vermelho — troca pela cor que quiser
};

export const bullets = [];

// ── Munição do pato ───────────────────────────────────────────
const DUCK_MAX_AMMO    = 5;
const DUCK_RELOAD_TIME = 4000; // ms
let duckAmmo      = DUCK_MAX_AMMO;
let duckReloading = false;

function reloadDuck() {
    duckReloading = true;
    setTimeout(() => {
        duckAmmo      = DUCK_MAX_AMMO;
        duckReloading = false;
    }, DUCK_RELOAD_TIME);
}

export function getDuckAmmo()      { return duckAmmo; }
export function isDuckReloading()  { return duckReloading; }

// ── Spawn ─────────────────────────────────────────────────────
export function spawnBullet(mouseX, mouseY, duckPos, width, height, shooter) {
    if (shooter === "duck") {
        if (duckReloading || duckAmmo <= 0) return;
        duckAmmo--;
        if (duckAmmo === 0) reloadDuck();
    }

    const startX = duckPos.posX + width  / 2;
    const startY = duckPos.posY + height / 2;

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

// ── Update ────────────────────────────────────────────────────
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