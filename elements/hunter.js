import { spawnBullet } from './shoot.js';

const HUNTER_WIDTH  = 100;
const HUNTER_HEIGHT = 100;
const SHOOT_INTERVAL = 1800;   // ms entre tiros
const HUNTER_HP      = 4;      // tiros necessários para derrubar

export const hunters = [];     // array global de caçadores

// ── Sorteia uma posição aleatória dentro de uma região de canto ──
function _randomCornerPos(cornerIndex) {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const MARGIN = 40;          // distância mínima da borda
    const SPREAD = 120;         // quanto pode variar dentro do canto

    const rand = (min, max) => min + Math.random() * (max - min);

    switch (cornerIndex) {
        case 0: return { x: rand(MARGIN, MARGIN + SPREAD),               y: rand(MARGIN, MARGIN + SPREAD) };               // topo-esquerda
        case 1: return { x: rand(W - HUNTER_WIDTH - MARGIN - SPREAD,
                                  W - HUNTER_WIDTH - MARGIN),             y: rand(MARGIN, MARGIN + SPREAD) };               // topo-direita
        case 2: return { x: rand(MARGIN, MARGIN + SPREAD),               y: rand(H - HUNTER_HEIGHT - MARGIN - SPREAD,
                                                                                   H - HUNTER_HEIGHT - MARGIN) };           // baixo-esquerda
        case 3: return { x: rand(W - HUNTER_WIDTH - MARGIN - SPREAD,
                                  W - HUNTER_WIDTH - MARGIN),             y: rand(H - HUNTER_HEIGHT - MARGIN - SPREAD,
                                                                                   H - HUNTER_HEIGHT - MARGIN) };           // baixo-direita
    }
}

// ── Spawna caçadores nos cantos da tela ──────────────────────
export function spawnHunters(numHunters) {
    // Embaralha os índices de canto para não repetir sempre a mesma ordem
    const cornerIndices = [0, 1, 2, 3].sort(() => Math.random() - 0.5);

    for (let i = 0; i < Math.min(numHunters, 4); i++) {
        const corner = _randomCornerPos(cornerIndices[i]);

        const el = document.createElement("div");
        el.classList.add("hunter");
        el.style.left   = corner.x + "px";
        el.style.top    = corner.y + "px";
        document.body.appendChild(el);

        // Lê tamanho real do CSS após inserção no DOM
        const realW = el.offsetWidth  || HUNTER_WIDTH;
        const realH = el.offsetHeight || HUNTER_HEIGHT;

        const hunter = {
            element:    el,
            posX:       corner.x,
            posY:       corner.y,
            width:      realW,
            height:     realH,
            hp:         HUNTER_HP,
            alive:      true,
            shootTimer: null,
        };

        // Inicia o loop de tiro do caçador
        _startShootLoop(hunter);

        // Ouve o evento de acerto por bala do pato
        el.addEventListener("hunterShot", () => {
            _onHunterShot(hunter);
        });

        hunters.push(hunter);
    }
}

// ── Loop de tiro do caçador ───────────────────────────────────
function _startShootLoop(hunter) {
    hunter.shootTimer = setInterval(() => {
        if (!hunter.alive) {
            clearInterval(hunter.shootTimer);
            return;
        }
        _hunterShoot(hunter);
    }, SHOOT_INTERVAL);
}

// Dispara uma bala do caçador em direção à posição atual do pato
function _hunterShoot(hunter) {
    // Importa duckPos de forma lazy para sempre pegar a posição atual
    import('./duck.js').then(({ duckPos }) => {
        spawnBullet(
            duckPos.posX + 50,          // alvo: centro aproximado do pato
            duckPos.posY + 50,
            { posX: hunter.posX, posY: hunter.posY },
            HUNTER_WIDTH,
            HUNTER_HEIGHT,
            "hunter"                    // tipo do atirador
        );
    });
}

// ── Caçador é atingido por uma bala ──────────────────────────
function _onHunterShot(hunter) {
    hunter.hp--;

    // Feedback visual de dano
    hunter.element.style.filter = "brightness(2) sepia(1) hue-rotate(-50deg) saturate(5)";
    setTimeout(() => {
        if (hunter.element) hunter.element.style.filter = "";
    }, 120);

    if (hunter.hp <= 0) {
        _killHunter(hunter);
    }
}

// ── Remove o caçador da tela e agenda respawn ────────────────
const RESPAWN_DELAY = 5000; // 5 segundos

function _killHunter(hunter) {
    hunter.alive = false;
    clearInterval(hunter.shootTimer);
    hunter.element.remove();

    setTimeout(() => {
        _respawnHunter(hunter);
    }, RESPAWN_DELAY);
}

function _respawnHunter(hunter) {
    const cornerIndex = Math.floor(Math.random() * 4);
    const corner = _randomCornerPos(cornerIndex);

    const el = document.createElement("div");
    el.classList.add("hunter");
    el.style.left = corner.x + "px";
    el.style.top  = corner.y + "px";
    document.body.appendChild(el);

    hunter.element = el;
    hunter.posX    = corner.x;
    hunter.posY    = corner.y;
    hunter.width   = el.offsetWidth  || HUNTER_WIDTH;
    hunter.height  = el.offsetHeight || HUNTER_HEIGHT;
    hunter.hp      = HUNTER_HP;
    hunter.alive   = true;

    el.addEventListener("hunterShot", () => _onHunterShot(hunter));

    _startShootLoop(hunter);
}

// ── Expõe largura/altura para uso externo (colisão) ──────────
export const hunterWidth  = HUNTER_WIDTH;
export const hunterHeight = HUNTER_HEIGHT;