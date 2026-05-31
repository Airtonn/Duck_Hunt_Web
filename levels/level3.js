import { moveDuck, spawnDogs, updateDogs, updateBullets, duckPos} from '../index.js';

spawnDogs(duckPos);

function gameLoop() {
    moveDuck();
    updateDogs(duckPos);
    updateBullets();

    requestAnimationFrame(gameLoop);
    document.body.addEventListener("dogHit", () => {
        console.log("dano");
    });
}

gameLoop();