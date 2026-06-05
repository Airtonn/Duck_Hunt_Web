import {
    moveDuck, spawnDogs, updateDogs, updateBullets, duckPos, duckWidth, duckHeight,
    spawnBullet, verifyColision, spawnEnergyItem, spawnHunters, resetScore, reload,
    resetDogs, resetHunters, resetBullets, resetDuck
} from '../index.js';

let isPaused = false;
let gameStarted = false;
let animationFrameId = null;

const pauseMenu = document.getElementById('pause-menu');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const restartBtn = document.getElementById('restart-btn');
const menuBtn = document.getElementById('menu-btn');

function gameLoop() {
    if (!isPaused) {
        moveDuck();                                          // atualiza o movimento e controles do pato
        updateDogs(duckPos, 10);                             // atualiza posicao, direcao e respawn dos cachorros
        updateBullets();                                     // atualiza a trajetoria das balas atiradas
        verifyColision(duckPos, duckWidth, duckHeight);      // executa checagens de colisao (bala, cachorro, energia)
    }
    animationFrameId = requestAnimationFrame(gameLoop);                     // agenda o proximo ciclo de renderizacao
}

function togglePause() {
    isPaused = !isPaused;
    pauseMenu.style.display = isPaused ? 'flex' : 'none';
}

function startNewGame() {
    // Soft reset: reset states and re-spawn elements
    resetScore();
    resetDuck();
    resetDogs();
    resetHunters();
    resetBullets();

    spawnDogs(duckPos, 1, 10);                               // cria o cachorro na tela
    spawnEnergyItem();                                       // cria o item de energia inicial na tela
    spawnHunters(1);                                         // cria o caçador

    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    gameLoop();                                              // inicia a execucao do loop de jogo
    gameStarted = true;
    isPaused = false;
    pauseMenu.style.display = 'none';
}

// Event Listeners for UI (Attached only once)
pauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePause();
});

resumeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePause();
});

restartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startNewGame();
});

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isPaused = false;
    pauseMenu.style.display = 'none';
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    document.dispatchEvent(new CustomEvent('returnToMenu'));
});
document.addEventListener('startGame', () => {
    startNewGame();
});

// Evento disparado quando o cachorro atinge o pato
document.body.addEventListener("dogHit", () => {
    console.log("Dano no pato");                         // mensagem de log indicando dano recebido
});

// Evento de clique de mouse para disparo
document.addEventListener("mousedown", function (event) {
    if (isPaused || (!gameStarted && document.getElementById('game-ui').style.display !== 'block')) return;
    if (event.target.closest('#pause-btn') || event.target.closest('#pause-menu')) return;

    if (event.button === 0) {                            // se o botao esquerdo do mouse for clicado
        spawnBullet(event.clientX, event.clientY, duckPos, duckWidth, duckHeight, "duck"); // dispara uma bala
    }
});
