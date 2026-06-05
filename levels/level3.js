import {
    moveDuck, spawnDogs, updateDogs, updateBullets, duckPos, duckLife,
    spawnBullet, verifyColision, spawnEnergyItem, spawnLifeItem, spawnHunters, resetScore, reload,
    resetDogs, resetHunters, resetBullets, resetDuck, getScore
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
    animationFrameId = requestAnimationFrame(gameLoop);                     // agenda o proximo ciclo de renderizacao
}

function triggerGameOver() {
    console.log("Level 3: GAME OVER");
    gameStarted = false;

    const currentScore = getScore();
    const highScore = parseInt(localStorage.getItem('duck_hunt_record_level3') || '0', 10);

    if (currentScore > highScore) {
        localStorage.setItem('duck_hunt_record_level3', currentScore);
    }

    const finalScoreEl = document.getElementById('current-game-score');
    const highScoreEl = document.getElementById('best-record-score');

    if (finalScoreEl) finalScoreEl.innerText = currentScore;
    if (highScoreEl) highScoreEl.innerText = Math.max(currentScore, highScore);

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
    console.log("Level 3: Starting new game");
    // Soft reset: reset states and re-spawn elements
    resetScore();
    resetDuck();
    resetDogs();
    resetHunters();
    resetBullets();
    resetEnergyItem();
    resetLifeItem();

    spawnDogs(duckPos, 4, 7);                                // cria os 4 cachorros iniciais na tela (vel reduzida)
    spawnEnergyItem();                                       // cria o item de energia inicial na tela
    spawnLifeItem();                                         // cria o item de vida inicial na tela
    // spawnHunters(2);                                         // cria os 2 caçadores

    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    gameStarted = true;
    isPaused = false;
    pauseMenu.style.display = 'none';
    gameOverScreen.style.display = 'none';
    gameLoop();                                              // inicia a execucao do loop de jogo
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

document.addEventListener('startLevel3', () => {
    startNewGame();
});

document.addEventListener('startLevel1', () => {
    gameStarted = false;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
});

document.addEventListener('startLevel2', () => {
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
