const heightScreen = window.innerHeight;        // altura da tela
const widthScreen = window.innerWidth;          // largura da tela
const heightDuck = 100;                     
const widthDuck = 100;
const dogHeight = 100;
const dogWidth = 100;

const dogVelocity = 10;
const numDogs = 4;

export const dogs = [];

function spawnPositionAndDirection(duckPos) {
    // Escolhe um dos 4 lados da tela para spawnar
    const side = Math.floor(Math.random() * 4); // 0=top, 1=bottom, 2=left, 3=right
    let posX, posY;

    if (side === 0) {        // topo
        posX = Math.random() * widthScreen;
        posY = -dogHeight;
    } else if (side === 1) { // baixo
        posX = Math.random() * widthScreen;
        posY = heightScreen + dogHeight;
    } else if (side === 2) { // esquerda
        posX = -dogWidth;
        posY = Math.random() * heightScreen;
    } else {                 // direita
        posX = widthScreen + dogWidth;
        posY = Math.random() * heightScreen;
    }

    // Direção fixa em linha reta em direção ao pato no momento do spawn
    const diffX = duckPos.posX - posX;
    const diffY = duckPos.posY - posY;
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);

    return {
        posX,
        posY,
        velX: (diffX / distance) * dogVelocity,
        velY: (diffY / distance) * dogVelocity,
    };
}

function isOutOfScreen(dog) {
    return (
        dog.posX + dogWidth < 0 ||
        dog.posX > widthScreen ||
        dog.posY + dogHeight < 0 ||
        dog.posY > heightScreen
    );
}

export function spawnDogs(duckPos) {
    for (let i = 0; i < numDogs; i++) {
        const dogElement = document.createElement("div");
        dogElement.classList.add("dog");
        document.body.appendChild(dogElement);

        const { posX, posY, velX, velY } = spawnPositionAndDirection(duckPos);

        dogs.push({
            element: dogElement,
            posX,
            posY,
            velX,
            velY,
            alive: true,        // controle de vida — sete false externamente quando HP chegar a 0
            hasDealtDamage: false,
        });
    }
}

export function updateDogs(duckPos) {
    dogs.forEach(dog => {
        // Cachorro morto não faz nada
        if (!dog.alive) return;

        // Move em linha reta com a velocidade/direção fixada no spawn
        dog.posX += dog.velX;
        dog.posY += dog.velY;

        // Espelha sprite conforme direção horizontal
        if (dog.velX < 0) dog.element.style.transform = "scale(1, 1)";
        else if (dog.velX > 0) dog.element.style.transform = "scale(-1, 1)";

        // Verifica colisão com o pato (AABB simples)
        if (!dog.hasDealtDamage) {
            const colliding =
                dog.posX < duckPos.posX + widthDuck &&
                dog.posX + dogWidth > duckPos.posX &&
                dog.posY < duckPos.posY + heightDuck &&
                dog.posY + dogHeight > duckPos.posY;

            if (colliding) {
                dog.hasDealtDamage = true;
                dog.element.dispatchEvent(new CustomEvent("dogHit", { bubbles: true }));
            }
        }

        // Saiu da tela: relança automaticamente em direção ao pato
        if (isOutOfScreen(dog)) {
            const { posX, posY, velX, velY } = spawnPositionAndDirection(duckPos);
            dog.posX = posX;
            dog.posY = posY;
            dog.velX = velX;
            dog.velY = velY;
            dog.hasDealtDamage = false;
            dog.element.style.left = dog.posX + "px";
            dog.element.style.top = dog.posY + "px";
            return;
        }

        dog.element.style.left = dog.posX + "px";
        dog.element.style.top = dog.posY + "px";
    });
}