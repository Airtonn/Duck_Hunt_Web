const lifeTextValue = document.getElementById("lifeValue")      // elemento de valor da vida
const energyTextValue = document.getElementById("energyValue")  // elemento de valor da energia
const duckNormalImage = "/img/images/duck_normal.png";           // imagem do pato normal
const duckConfuseImage = "/img/images/duck_confused.png"         // imagem do pato confuso
export const duck = document.getElementById("duck");        // pegando o elemento pato por meio do id
export let duckPos = { posX: 500, posY: 500 };                // variavel responsavel por guardas as posicoes x e y do pato
const walk = 5;                                             // velocidade normal do pato
const run = 12;                                             // velocidade de corrida do pato
export let duckEnergy = 100;                                // energia do pato para correr
const costRun = 5;                                          // custo da corrida
export let duckLife = 100                                   // vida do pato
export let duckInvincible = false                           // booleana para verificar se o pato está invencivel
export let duckConfuse = false                              // booleana para verificar se o pato está confuso
let confuseTimeout = null;                                  // armazena o ID do temporizador para o estado confuso

// largura e altura são lidas dinamicamente a cada frame — ver moveDuck()
// mapa de teclas para controlar o pato:
export const keys = { w: false, a: false, s: false, d: false, shift: false };

duck.style.left = duckPos.posX + "px";                      // declarando a posicao x inicial do pato
duck.style.top = duckPos.posY + "px";                       // declarando a posicao y inicial do pato

// evento de clique: apertar a tecla pra baixo
document.addEventListener("keydown", function (event) {
    const button = event.key.toLowerCase();                 // pega a tecla que foi apertada e deixa o texto em minusculo
    if (keys.hasOwnProperty(button)) keys[button] = true;   // veriffica se a tecla apertada está no mapeamento e se sim:
});                                                         // tecla do mapeamento é marcada com true

// evento de clique: soltar a tecla
document.addEventListener("keyup", function (event) {
    const button = event.key.toLowerCase();                 // pega a tecla que foi solta e deixa o texto em minusculo
    if (keys.hasOwnProperty(button)) keys[button] = false;  // veriffica se a tecla solta está no mapeamento e se sim:
});                                                         // tecla do mapeamento é marcada com false

// funcao de movimentacao do pato
export function moveDuck() {
    let currentVelocity;                   // velocidade atual

    if (keys.shift && duckEnergy > 0) {        // se shift estiver sendo apertado e a energia for maior que 0
        currentVelocity = run;                 // velocidade do pato é a velocidade de corrida       
        duckEnergy -= costRun;                 // a energia decai de acordo com custo da corrida
        if (duckEnergy < 0) duckEnergy = 0;    // se eneergia ficar menor que 0 entao ela recebe 0
    } else {
        currentVelocity = walk;            // senao a velocidade do pato é a velocidade de andar
        if (duckEnergy < 100) duckEnergy += 0.5;   // se a energia for menor que 100 ela recebe um valor de recuperacao
    }

    if (keys.w) duckPos.posY -= currentVelocity;    // se W estiver sendo apertado entao o pato sobe algumas posicoes em Y ***
    if (keys.s) duckPos.posY += currentVelocity;    // se S estiver sendo apertado entao o pato desce algumas posicoes em Y ***
    if (keys.a) { duckPos.posX -= currentVelocity; duck.style.transform = "scale(-1, 1)"; } // se A estiver sendo apertado entao o pato volta algumas posicoes em X
    if (keys.d) { duckPos.posX += currentVelocity; duck.style.transform = "scale(1, 1)"; }  // se D estiver sendo apertado entao o pato avança algumas posicoes em X

    // Solucao 2: lê tamanho real da tela e do pato a cada frame
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const dW = duck.offsetWidth  || 100;            // largura real do pato no momento atual
    const dH = duck.offsetHeight || 100;            // altura real do pato no momento atual

    if (duckPos.posX < 0) duckPos.posX = 0;         // impede sair pela esquerda
    else if (duckPos.posX > screenW - dW) duckPos.posX = screenW - dW; // impede sair pela direita
    if (duckPos.posY < 0) duckPos.posY = 0;         // impede sair pelo topo
    else if (duckPos.posY > screenH - dH) duckPos.posY = screenH - dH; // impede sair pelo fundo

    duck.style.left = duckPos.posX + "px";          // atualiza a posicao x do pato
    duck.style.top = duckPos.posY + "px";           // atualiza a posicao y do pato

    energyTextValue.textContent = Math.floor(duckEnergy);
}
// *** Como a coordenada Y é invertida entao os valores negativos em Y fazem objetos subirem

export function takeDamage(damage, enemy) {
    if (duckInvincible) { return }
    duckLife -= damage;
    if (enemy == "dog") {
        duckConfuse = true;

        // Altera o asset visual do pato (imagem de fundo) para o pato confuso
        duck.style.backgroundImage = `url('${duckConfuseImage}')`;

        // Reseta o temporizador caso ocorra outra colisão enquanto estiver confuso
        if (confuseTimeout) {
            clearTimeout(confuseTimeout);
        }

        // Após 20 segundos (20000ms), o pato volta ao estado normal
        confuseTimeout = setTimeout(() => {
            duckConfuse = false;
            duck.style.backgroundImage = `url('${duckNormalImage}')`;
        }, 600); // 600 milissegundos = 0.6 segundos
    }
    lifeTextValue.textContent = Math.floor(duckLife);
}

// funcao para alterar o valor de energia do pato externamente
export function setDuckEnergy(value) {
    duckEnergy = value;
    energyTextValue.textContent = Math.floor(duckEnergy);
}

// funcao para alterar o valor da vida do pato externamente
export function setDuckLife(value) {
    duckLife += value;
    if (duckLife > 100) duckLife = 100;
    lifeTextValue.textContent = Math.floor(duckLife);
}

export function resetDuck() {
    duckPos.posX = 500;
    duckPos.posY = 500;
    duck.style.left = duckPos.posX + "px";
    duck.style.top = duckPos.posY + "px";
    duck.style.transform = "scale(1, 1)";
    duck.style.backgroundImage = `url('${duckNormalImage}')`;

    duckLife = 100;
    duckEnergy = 100;
    duckInvincible = false;
    duckConfuse = false;

    if (confuseTimeout) clearTimeout(confuseTimeout);

    lifeTextValue.textContent = "100";
    energyTextValue.textContent = "100";
}
