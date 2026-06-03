import {
    moveDuck, spawnDogs, updateDogs, updateBullets, duckPos, duckWidth, duckHeight,
    spawnBullet, verifyColision
} from '../index.js';

spawnDogs(duckPos, 4, 10);

function gameLoop() {
    moveDuck();
    updateDogs(duckPos, 10);
    updateBullets();
    verifyColision(duckPos, duckWidth, duckHeight);
    requestAnimationFrame(gameLoop);
}

gameLoop();

document.body.addEventListener("dogHit", () => {
    console.log("Dano no pato");
});

document.addEventListener("mousedown", function (event) {
    if (event.button === 0) {
        spawnBullet(event.clientX, event.clientY, duckPos, duckWidth, duckHeight, "duck");
    }
});

