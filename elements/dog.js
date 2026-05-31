const heightScreen = window.innerHeight;
const widthScreen = window.innerWidth;
const heightDuck = 100;
const widthDuck = 100;

const dogVelocity = 2.5;
const separationDistance = 100;
const numDogs = 3;

export const dogs = [];

export function spawnDogs() {
    for (let i = 0; i < numDogs; i++) {
        const dogElement = document.createElement("div");
        dogElement.classList.add("dog");
        document.body.appendChild(dogElement);

        dogs.push({
            element: dogElement,
            posX: Math.random() * (widthScreen - widthDuck),
            posY: Math.random() * (heightScreen - heightDuck)
        });
    }
}

export function updateDogs(duckPos) {
    dogs.forEach(dog => {
        let moveX = 0;
        let moveY = 0;

        const diffX = duckPos.posX - dog.posX;
        const diffY = duckPos.posY - dog.posY;
        const distance = Math.sqrt(diffX * diffX + diffY * diffY);

        if (distance > 5) {
            moveX += (diffX / distance) * dogVelocity;
            moveY += (diffY / distance) * dogVelocity;
        }

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

        if (moveX < 0) dog.element.style.transform = "scale(1, 1)";
        else if (moveX > 0) dog.element.style.transform = "scale(-1, 1)";

        if (dog.posX < 0) dog.posX = 0;
        else if (dog.posX > widthScreen - widthDuck) dog.posX = widthScreen - widthDuck;
        if (dog.posY < 0) dog.posY = 0;
        else if (dog.posY > heightScreen - heightDuck) dog.posY = heightScreen - heightDuck;

        dog.element.style.left = dog.posX + "px";
        dog.element.style.top = dog.posY + "px";
    });
}