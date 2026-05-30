export const duck = document.getElementById("duck");
export let posX = 0;
export let posY = 0;
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

    if (keys.w) posY -= currentVelocity;
    if (keys.s) posY += currentVelocity;
    if (keys.a) { posX -= currentVelocity; duck.style.transform = "scale(-1, 1)"; }
    if (keys.d) { posX += currentVelocity; duck.style.transform = "scale(1, 1)"; }

    if (posX < 0) posX = 0;
    else if (posX > widthScreen - widthDuck) posX = widthScreen - widthDuck;
    if (posY < 0) posY = 0;
    else if (posY > heightScreen - heightDuck) posY = heightScreen - heightDuck;

    duck.style.left = posX + "px";
    duck.style.top = posY + "px";
}