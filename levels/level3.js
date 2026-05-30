import { moveDuck, spawnDogs, updateDogs, updateBullets } from '../index.js';

spawnDogs();

function gameLoop() {
    moveDuck();
    updateDogs();
    updateBullets();

    requestAnimationFrame(gameLoop);
}

gameLoop();