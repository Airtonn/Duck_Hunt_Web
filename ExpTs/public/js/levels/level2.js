import {
    moveDuck, spawnDogs, updateDogs, updateBullets, duckPos, duckLife,
    spawnBullet, verifyColision, spawnEnergyItem, spawnLifeItem, spawnHunters, resetScore, reload,
    resetDogs, resetHunters, resetBullets, resetDuck, getScore, resetEnergyItem, resetLifeItem
} from '../index.js';

let isPaused = false;
let gameStarted = false;
let animationFrameId = null;

const pauseMenu = document.getElementById('pause-menu');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const restartBtn = document.getElementById('restart-btn');
const menuBtn = document.getElementById('menu-btn');

const gameOverScreen = document.getElementById('game-over');
const restartGameOverBtn = document.getElementById('restart-game-over-btn');
const menuGameOverBtn = document.getElementById('menu-game-over-btn');

function gameLoop() {
    if (!isPaused && gameStarted) {
        moveDuck();                                          // atualiza o movimento e controles do pato
        updateDogs(duckPos, 7);                              // atualiza posicao, direcao e respawn dos cachorros (vel reduzida)
        updateBullets();                                     // atualiza a trajetoria das balas atiradas
        verifyColision();                                    // executa checagens de colisao (bala, cachorro, energia)

        if (duckLife <= 0) {
            triggerGameOver();
            return;
        }
    }
    animationFrameId = requestAnimationFrame(gameLoop);                     // agenda o próximo ciclo de renderização
}

function triggerGameOver() {
    console.log("Fase 2: GAME OVER");
    gameStarted = false;

    const currentScore = getScore();
    const highScore = parseInt(localStorage.getItem('duck_hunt_record_level2') || '0', 10);

    if (currentScore > highScore) {
        localStorage.setItem('duck_hunt_record_level2', currentScore);
    }

    const finalScoreEl = document.getElementById('current-game-score');
    const highScoreEl = document.getElementById('best-record-score');

    if (finalScoreEl) finalScoreEl.innerText = currentScore;
    if (highScoreEl) highScoreEl.innerText = Math.max(currentScore, highScore);

    // Salva a pontuação
    document.dispatchEvent(new CustomEvent('saveScore', { detail: { score: currentScore } }));

    gameOverScreen.style.display = 'flex';
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
}

function togglePause() {
    if (!gameStarted && duckLife > 0) return;
    if (gameOverScreen.style.display === 'flex') return;
    isPaused = !isPaused;
    pauseMenu.style.display = isPaused ? 'flex' : 'none';
}

function startNewGame() {
    console.log("Fase 2: Iniciando novo jogo");
    // Reset leve: reseta estados e recria elementos
    resetScore();
    resetDuck();
    resetDogs();
    resetHunters();
    resetBullets();
    resetEnergyItem();
    resetLifeItem();

    spawnDogs(duckPos, 2, 7);                                // cria 2 cachorros na tela (vel reduzida)
    spawnEnergyItem();                                       // cria o item de energia inicial na tela
    spawnLifeItem();                                         // cria o item de vida inicial na tela
    spawnHunters(2);                                         // cria 2 caçadores

    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    gameStarted = true;
    isPaused = false;
    pauseMenu.style.display = 'none';
    gameOverScreen.style.display = 'none';
    gameLoop();                                              // inicia a execucao do loop de jogo
}

// Listeners de eventos da interface (adicionados apenas uma vez)
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

function backToMenu(e) {
    e.stopPropagation();
    isPaused = false;
    gameStarted = false;
    pauseMenu.style.display = 'none';
    gameOverScreen.style.display = 'none';
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    document.dispatchEvent(new CustomEvent('returnToMenu'));
}

menuBtn.addEventListener('click', backToMenu);
menuGameOverBtn.addEventListener('click', backToMenu);

document.addEventListener('startLevel2', () => {
    startNewGame();
});

document.addEventListener('startLevel1', () => {
    gameStarted = false;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
});

document.addEventListener('startLevel3', () => {
    gameStarted = false;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
});

// Evento disparado quando o cachorro atinge o pato
document.body.addEventListener("dogHit", () => {
    console.log("Dano no pato");                         // mensagem de log indicando dano recebido
});

// Evento de clique de mouse para disparo
document.addEventListener("mousedown", function (event) {
    if (isPaused || !gameStarted) return;
    if (event.target.closest('#pause-btn') || event.target.closest('#pause-menu') || event.target.closest('#game-over')) return;

    if (event.button === 0) {                            // se o botao esquerdo do mouse for clicado
        spawnBullet(event.clientX, event.clientY, duckPos, null, null, "duck"); // dispara uma bala
    }
});
