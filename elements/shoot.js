const BULLET_SPEED   = 8;      // pixels por frame
const BULLET_SIZE    = 12;     // diâmetro da bolinha (px)
const DUCK_BULLET_COLOR   = "#4fc3f7"; // azul claro

// Array com todos os projéteis ativos na tela
export const bullets = [];

// ── Cria um projétil novo na posição do pato ──────────────────
export function spawnBullet(mouseX, mouseY) {
    // Centro do pato
    const duckRect = duck.getBoundingClientRect();
    const startX   = duckRect.left + duckRect.width  / 2;
    const startY   = duckRect.top  + duckRect.height / 2;

    // Vetor direção (normalizado)
    const dx    = mouseX - startX;
    const dy    = mouseY - startY;
    const dist  = Math.hypot(dx, dy);

    if (dist === 0) return;   // clicou exatamente no pato – ignora

    const vx = (dx / dist) * BULLET_SPEED;
    const vy = (dy / dist) * BULLET_SPEED;

    // Cria elemento <div> para o projétil
    const el = document.createElement("div");
    el.classList.add("bullet");
    el.style.width  = BULLET_SIZE + "px";
    el.style.height = BULLET_SIZE + "px";
    el.style.left   = (startX - BULLET_SIZE / 2) + "px";
    el.style.top    = (startY - BULLET_SIZE / 2) + "px";
    el.style.backgroundColor = DUCK_BULLET_COLOR;
    document.body.appendChild(el);

    bullets.push({ el, x: startX - BULLET_SIZE / 2,
                       y: startY - BULLET_SIZE / 2,
                       vx, vy });
}

// ── Atualiza todos os projéteis (chamado no game loop) ────────
export function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.x += b.vx;
        b.y += b.vy;

        b.el.style.left = b.x + "px";
        b.el.style.top  = b.y + "px";

        // Remove se sair da tela
        if (b.x < -BULLET_SIZE || b.x > window.innerWidth  + BULLET_SIZE ||
            b.y < -BULLET_SIZE || b.y > window.innerHeight + BULLET_SIZE) {
            b.el.remove();
            bullets.splice(i, 1);
        }
    }
}

// ── Dispara ao clicar ─────────────────────────────────────────
document.addEventListener("mousedown", function(event) {
    // Botão esquerdo apenas (button === 0)
    if (event.button === 0) {
        spawnBullet(event.clientX, event.clientY);
    }
});
