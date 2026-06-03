const lifeTextValue = document.getElementById("lifeValue")      // elemento de valor da vida
const energyTextValue = document.getElementById("energyValue")  // elemento de valor da energia
const duckNormalImage = "images/duck_normal.png";           // imagem do pato normal
const duckConfuseImage = "images/duck_confused.png"         // imagem do pato confuso
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

const heightScreen = window.innerHeight;                    // altura da tela
const widthScreen = window.innerWidth;                      // largura da tela
export const duckHeight = duck.offsetHeight || 100;         // altura do pato
export const duckWidth = duck.offsetWidth || 100;           // largura do pato
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

    if (duckPos.posX < 0) duckPos.posX = 0;         // se a posicao X do pato for menor que 0 entao ele recebe 0 (impedir que ele saia da tela)
    // se a posicao X do pato for maior que a largura maxima da tela entao ele recebe largura da tela - largura do pato (impedir que ele saia da tela)
    else if (duckPos.posX > widthScreen - duckWidth) duckPos.posX = widthScreen - duckWidth;
    if (duckPos.posY < 0) duckPos.posY = 0;         // se a posicao Y do pato for menor que 0 entao ele recebe 0 (impedir que ele saia da tela)
    // se a posicao Y do pato for maior que a altura maxima da tela entao ele recebe altura da tela - altura do pato (impedir que ele saia da tela)
    else if (duckPos.posY > heightScreen - duckHeight) duckPos.posY = heightScreen - duckHeight;

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
    duckEnergy = value;                                 // define o novo valor de energia
    energyTextValue.textContent = Math.floor(duckEnergy); // atualiza o texto na interface
}