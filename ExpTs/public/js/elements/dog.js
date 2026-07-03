// largura/altura da tela e do cachorro são lidas dinamicamente dentro das funções
const delayRespawn = 2000;                      // tempo de delay para ressurgimento do cachorro (2 segundos)
const offscreenCoord = -1000;                   // coordenada fora da tela para esconder o cachorro
const timeToMaxSpeed = 90000;                   // tempo em milissegundos para atingir a velocidade maxima (180 segundos)

export const dogs = [];                         // array responsavel por guardar os cachorros criados
let startTime = null;                           // marca o tempo de inicio do jogo para calcular a velocidade

//funcao que calcula a posicao inicial de spawn e velocidade/direcao em direcao ao pato
function spawnPositionAndDirection(duckPos, dogVelocity) {
    // Solucao 2: le tamanho da tela diretamente no momento do spawn
    const widthScreen = window.innerWidth;
    const heightScreen = window.innerHeight;
    const side = Math.floor(Math.random() * 4); // Escolhe um dos 4 lados da tela (0=top, 1=bottom, 2=left, 3=right)
    let posX, posY;

    if (side === 0) {        // topo
        posX = Math.random() * widthScreen;
        posY = -120;
    } else if (side === 1) { // baixo
        posX = Math.random() * widthScreen;
        posY = heightScreen + 120;
    } else if (side === 2) { // esquerda
        posX = -120;
        posY = Math.random() * heightScreen;
    } else {                 // direita
        posX = widthScreen + 120;
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

// funcao para verificar se o cachorro saiu totalmente da tela
function isOutOfScreen(dog) {
    // Solucao 2+3: le tela e tamanho real do elemento a cada chamada
    const dw = dog.element.offsetWidth || 120;
    const dh = dog.element.offsetHeight || 120;
    return (
        dog.posX + dw < 0 ||
        dog.posX > window.innerWidth ||
        dog.posY + dh < 0 ||
        dog.posY > window.innerHeight
    );
}

// funcao para ativar o delay de ressurgimento do cachorro, escondendo-o
function triggerRespawn(dog) {
    dog.respawning = true;                              // ativa o estado de ressurgimento
    dog.respawnAt = Date.now() + delayRespawn;          // calcula o momento exato em que ele deve reaparecer
    dog.element.style.display = "none";                 // esconde o elemento na tela
    dog.posX = offscreenCoord;                          // joga a posicao logica X para longe
    dog.posY = offscreenCoord;                          // joga a posicao logica Y para longe
    dog.element.style.left = offscreenCoord + "px";      // atualiza a posicao X no css
    dog.element.style.top = offscreenCoord + "px";       // atualiza a posicao Y no css
    dog.hasDealtDamage = false;                         // permite causar dano novamente no proximo spawn
}

// funcao para spawnar/criar os cachorros iniciais
export function spawnDogs(duckPos, numDogs, dogVelocity) {
    if (startTime === null) startTime = Date.now();     // define o tempo de inicio do jogo
    for (let i = 0; i < numDogs; i++) {
        const dogElement = document.createElement("div"); // cria o elemento div do cachorro
        dogElement.classList.add("dog");                  // adiciona a classe css .dog
        document.body.appendChild(dogElement);            // adiciona o cachorro ao corpo do documento

        const { posX, posY, velX, velY } = spawnPositionAndDirection(duckPos, dogVelocity);

        const dog = {
            element: dogElement,                        // elemento html do cachorro
            posX,                                       // posicao x do cachorro
            posY,                                       // posicao y do cachorro
            velX,                                       // velocidade x do cachorro
            velY,                                       // velocidade y do cachorro
            speed: dogVelocity,                         // velocidade atual do cachorro
            baseSpeed: dogVelocity,                     // velocidade base de spawn
            alive: true,                                // controle de vida — sete false externamente quando HP chegar a 0
            hasDealtDamage: false,                      // verifica se ja causou dano ao pato
            respawning: false,                          // controle de delay para ressurgir
            respawnAt: 0,                               // momento do ressurgimento
        };

        // Trata o evento do cachorro ser atingido por um tiro
        dogElement.addEventListener("dogShot", () => {
            triggerRespawn(dog);                        // inicia o delay para ressurgir
        });

        dogs.push(dog);                                 // insere o cachorro na lista global
    }
}

// funcao para atualizar movimentacao, sprite e ressurgimento dos cachorros
export function updateDogs(duckPos, dogVelocity) {
    if (startTime === null) startTime = Date.now();     // garante que o tempo de inicio esteja definido
    const elapsedTime = Date.now() - startTime;          // calcula o tempo decorrido
    const progress = Math.min(elapsedTime / timeToMaxSpeed, 1); // calcula o progresso de 0 a 1 ate a velocidade maxima
    const speedMultiplier = 1 + progress * 1.5;            // calcula o multiplicador de velocidade de 1x a 2x

    dogs.forEach(dog => {
        // Cachorro morto nao faz nada
        if (!dog.alive) return;

        // Se o cachorro está no processo de ressurgir, verifica se o tempo de delay passou
        if (dog.respawning) {
            if (Date.now() >= dog.respawnAt) {          // se ja passou o tempo do delay
                const { posX, posY, velX, velY } = spawnPositionAndDirection(duckPos, dogVelocity);
                dog.posX = posX;                        // atualiza posicao x
                dog.posY = posY;                        // atualiza posicao y
                dog.velX = velX;                        // atualiza velocidade x
                dog.velY = velY;                        // atualiza velocidade y
                dog.respawning = false;                 // desmarca a flag de ressurgimento
                dog.element.style.display = "block";    // volta a mostrar o elemento na tela
                dog.element.style.left = dog.posX + "px";  // atualiza o estilo x
                dog.element.style.top = dog.posY + "px";   // atualiza o estilo y
            }
            return;
        }

        // Move em linha reta aplicando o multiplicador de velocidade ao longo do tempo
        dog.posX += dog.velX * speedMultiplier;
        dog.posY += dog.velY * speedMultiplier;

        // Espelha sprite conforme direcao horizontal
        if (dog.velX < 0) dog.element.style.transform = "scale(1, 1)";
        else if (dog.velX > 0) dog.element.style.transform = "scale(-1, 1)";

        // Saiu da tela: inicia o delay para ressurgimento
        if (isOutOfScreen(dog)) {
            triggerRespawn(dog);                        // inicia o delay para ressurgir
            return;
        }

        dog.element.style.left = dog.posX + "px";       // atualiza posicao x no css
        dog.element.style.top = dog.posY + "px";        // atualiza posicao y no css
    });
}

// funcao para tratar colisoes/tiros adicionais (reduz velocidade)
export function hitDog(dog) {
    dog.speed *= 0.7;                                    // reduz a velocidade em 30% a cada acerto

    // Recalcula as velocidades velX e velY mantendo a direcao atual
    const currentSpeed = Math.hypot(dog.velX, dog.velY);
    if (currentSpeed > 0) {
        const ratio = dog.speed / currentSpeed;
        dog.velX *= ratio;
        dog.velY *= ratio;
    }

    // Feedback visual opcional (piscar vermelho)
    dog.element.style.filter = "brightness(2) sepia(1) hue-rotate(-50deg) saturate(5)";
    setTimeout(() => {
        if (dog.element) dog.element.style.filter = "none";
    }, 100);
}

export function resetDogs() {
    dogs.forEach(dog => {
        if (dog.element) dog.element.remove();
    });
    dogs.length = 0;
    startTime = null;
}