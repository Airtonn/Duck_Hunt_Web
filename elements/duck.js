export const duck = document.getElementById("duck");
export let duckPos = {posX: 0, posY: 0};
const velocity = 5;
export let energy = 100;
const costRun = 10;

const heightScreen = window.innerHeight;
const widthScreen = window.innerWidth;
const heightDuck = duck.offsetHeight || 100;
const widthDuck = duck.offsetWidth || 100;

export const keys = { w: false, a: false, s: false, d: false, shift: false };

document.addEventListener("keydown", function (event) {
    const button = event.key.toLowerCase();
    if (keys.hasOwnProperty(button)) keys[button] = true;
});

document.addEventListener("keyup", function (event) {
    const button = event.key.toLowerCase();
    if (keys.hasOwnProperty(button)) keys[button] = false;
});

export function moveDuck() {
    let currentVelocity;

    if (energy > 100) energy = 100;
    else if (energy < 0) energy = 0;

    if (keys.shift && energy > 0) {
        currentVelocity = 10;
        energy -= costRun / 4;
    } else {
        currentVelocity = velocity;
        if (energy < 100) energy += 0.5;
    }

    if (keys.w) duckPos.posY -= currentVelocity;
    if (keys.s) duckPos.posY += currentVelocity;
    if (keys.a) { duckPos.posX -= currentVelocity; duck.style.transform = "scale(-1, 1)"; }
    if (keys.d) { duckPos.posX += currentVelocity; duck.style.transform = "scale(1, 1)"; }

    if (duckPos.posX < 0) duckPos.posX = 0;
    else if (duckPos.posX > widthScreen - widthDuck) duckPos.posX = widthScreen - widthDuck;
    if (duckPos.posY < 0) duckPos.posY = 0;
    else if (duckPos.posY > heightScreen - heightDuck) duckPos.posY = heightScreen - heightDuck;

    duck.style.left = duckPos.posX + "px";
    duck.style.top = duckPos.posY + "px";
}