import { moveDuck, spawnDogs, updateDogs, updateBullets, duckPos, duckWidth, duckHeight,
    spawnBullet
} from '../index.js';

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

document.addEventListener("mousedown", function(event) {
    if (event.button === 0) {
        spawnBullet(event.clientX, event.clientY, duckPos, duckWidth, duckHeight, "duck");
    }
});