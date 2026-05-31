import { moveDuck, spawnDogs, updateDogs, updateBullets, duckPos } from '../index.js';

spawnDogs();

function gameLoop() {
    moveDuck();
    updateDogs(duckPos);
    updateBullets();

    requestAnimationFrame(gameLoop);
}

gameLoop();