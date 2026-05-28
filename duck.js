const duck = document.getElementById("duck");
let posX = 0;
let posY = 0;
let velocity = 5;
const keys = { w: false, a: false, s: false, d: false, shift: false }
const heightScreen = window.innerHeight;
const widthScreen = window.innerWidth;
const heightDuck = duck.offsetHeight || 100; // fallback if offsetHeight is 0 initially
const widthDuck = duck.offsetWidth || 100;
let energy = 100;
const costRun = 10;

const dogs = [];
const numDogs = 3;
const dogVelocity = 2.5;
const separationDistance = 100;

function spawnDogs() {
    for (let i = 0; i < numDogs; i++) {
        const dogElement = document.createElement("div");
        dogElement.classList.add("dog");
        document.body.appendChild(dogElement);

        const dog = {
            element: dogElement,
            posX: Math.random() * (widthScreen - widthDuck),
            posY: Math.random() * (heightScreen - heightDuck)
        };
        dogs.push(dog);
    }
}

document.addEventListener("keydown", function (event) {
    const button = event.key.toLowerCase();
    if (keys.hasOwnProperty(button)) {
        keys[button] = true;
    }
});

document.addEventListener("keyup", function (event) {
    const button = event.key.toLowerCase();
    if (keys.hasOwnProperty(button)) {
        keys[button] = false;
    }
});

spawnDogs();

function gameLoop() {
    let currentVelocity;

    if (energy > 100) { energy = 100 } else if (energy < 0) { energy = 0 }

    if (keys.shift && energy > 0) {
        currentVelocity = 10;
        energy -= costRun / 4; // Ajustado para ser menos agressivo
    }
    else {
        currentVelocity = velocity;
        if (energy < 100) energy += 0.5;
    }

    if (keys.w) { posY -= currentVelocity; }
    if (keys.s) { posY += currentVelocity; }
    if (keys.a) { posX -= currentVelocity; duck.style.transform = "scale(-1, 1)"; }
    if (keys.d) { posX += currentVelocity; duck.style.transform = "scale(1, 1)"; }

    // Limites do pato
    if (posX < 0) posX = 0;
    else if (posX > widthScreen - widthDuck) posX = widthScreen - widthDuck;

    if (posY < 0) posY = 0;
    else if (posY > heightScreen - heightDuck) posY = heightScreen - heightDuck;

    duck.style.left = posX + "px";
    duck.style.top = posY + "px";

    // Lógica dos cachorros
    dogs.forEach(dog => {
        let moveX = 0;
        let moveY = 0;

        // Segue o pato 
        const diffX = posX - dog.posX;
        const diffY = posY - dog.posY;
        const distance = Math.sqrt(diffX * diffX + diffY * diffY);

        if (distance > 5) {
            moveX += (diffX / distance) * dogVelocity;
            moveY += (diffY / distance) * dogVelocity;
        }

        // Pros cachorro nao se juntar
        dogs.forEach(otherDog => {
            if (dog === otherDog) return;

            const dx = dog.posX - otherDog.posX;
            const dy = dog.posY - otherDog.posY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < separationDistance) {
                moveX += (dx / dist) * 1.5;
                moveY += (dy / dist) * 1.5;
            }
        });
        dog.posX += moveX;
        dog.posY += moveY;
        
        if (moveX < 0) {
            dog.element.style.transform = "scale(1, 1)";
        } else if (moveX > 0) {
            dog.element.style.transform = "scale(-1, 1)";
        }

        if (dog.posX < 0) dog.posX = 0;
        else if (dog.posX > widthScreen - widthDuck) dog.posX = widthScreen - widthDuck;
        if (dog.posY < 0) dog.posY = 0;
        else if (dog.posY > heightScreen - heightDuck) dog.posY = heightScreen - heightDuck;

        dog.element.style.left = dog.posX + "px";
        dog.element.style.top = dog.posY + "px";
    });

    requestAnimationFrame(gameLoop);
}

gameLoop();
