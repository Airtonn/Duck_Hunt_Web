// Variáveis globais
let duck;
let hunter;
let bullets = [];
let keys = { w: false, a: false, s: false, d: false, shift: false, space: false };
let gameActive = true;

// Inicializar jogo
function initGame() {
    duck = new Duck();
    hunter = new Hunter();
}

// Eventos do teclado
document.addEventListener("keydown", function(event) {
    const button = event.key.toLowerCase();
    if (keys.hasOwnProperty(button)) {
        keys[button] = true;
    }
    if (event.code === "Space") {
        keys.space = true;
        event.preventDefault();
    }
});

document.addEventListener("keyup", function(event) {
    const button = event.key.toLowerCase();
    if (keys.hasOwnProperty(button)) {
        keys[button] = false;
    }
    if (event.code === "Space") {
        keys.space = false;
    }
});

// Atirador com clique do mouse
document.addEventListener("click", function(event) {
    if (gameActive) {
        duck.shoot(event.clientX, event.clientY);
    }
});

// Verificar colisões
function checkCollisions() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        
        // Colisão com pato (apenas projéteis do caçador)
        if (bullet.owner === "hunter") {
            const duckCenterX = duck.posX + duck.widthDuck / 2;
            const duckCenterY = duck.posY + duck.heightDuck / 2;
            
            if (bullet.checkCollision(duckCenterX, duckCenterY, duck.widthDuck / 2)) {
                if (duck.takeDamage(10)) {
                    gameOver("Caçador");
                }
                bullet.remove();
                bullets.splice(i, 1);
                continue;
            }
        }
        
        // Colisão com caçador (apenas projéteis do pato)
        if (bullet.owner === "duck") {
            const hunterCenterX = hunter.posX + hunter.width / 2;
            const hunterCenterY = hunter.posY + hunter.height / 2;
            
            if (bullet.checkCollision(hunterCenterX, hunterCenterY, hunter.width / 2)) {
                if (hunter.takeDamage(10)) {
                    gameOver("Pato");
                }
                bullet.remove();
                bullets.splice(i, 1);
                continue;
            }
        }
        
        // Remover projéteis fora da tela
        if (bullet.isOffScreen()) {
            bullet.remove();
            bullets.splice(i, 1);
        }
    }
}

// Atualizar HUD
function updateHUD() {
    document.getElementById("duckHealthValue").textContent = Math.max(0, Math.floor(duck.health));
    document.getElementById("hunterHealthValue").textContent = Math.max(0, Math.floor(hunter.health));
    document.getElementById("energyValue").textContent = Math.floor(duck.energy);
}

// Game Over
function gameOver(winner) {
    gameActive = false;
    const message = winner === "Pato" ? "Pato venceu! 🦆" : "Caçador venceu! 🔫";
    alert(message);
    location.reload();
}

// Game Loop
function gameLoop() {
    if (!gameActive) return;
    
    duck.update(keys);
    hunter.update(duck.posX, duck.posY);
    
    // Atualizar projéteis
    for (let bullet of bullets) {
        bullet.update();
    }
    
    // Verificar colisões
    checkCollisions();
    
    // Decrementar cooldown de tiro
    duck.shootCooldown--;
    
    // Atualizar HUD
    updateHUD();
    
    requestAnimationFrame(gameLoop);
}

// Iniciar jogo quando página carregar
window.addEventListener("load", function() {
    initGame();
    gameLoop();
});
