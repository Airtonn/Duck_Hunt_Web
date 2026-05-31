export const duck = document.getElementById("duck");        // pegando o elemento pato por meio do id
export let duckPos = {posX: 500, posY: 500};                // variavel responsavel por guardas as posicoes x e y do pato
const walk = 5;                                             // velocidade normal do pato
const run = 12;                                             // velocidade de corrida do pato
export let energy = 100;                                    // energia do pato para correr
const costRun = 10;                                         // custo da corrida

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

    if (keys.shift && energy > 0) {        // se shift estiver sendo apertado e a energia for maior que 0
        currentVelocity = run;             // velocidade do pato é a velocidade de corrida       
        energy -= costRun;                 // a energia decai de acordo com custo da corrida
    } else {
        currentVelocity = walk;            // senao a velocidade do pato é a velocidade de andar
        if (energy < 100) energy += 0.5;   // se a energia for menor que 100 ela recebe um valor de recuperacao
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
}

// *** Como a coordenada Y é invertida entao os valores negativos em Y fazem objetos subirem