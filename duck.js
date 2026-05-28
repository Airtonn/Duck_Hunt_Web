const duck = document.getElementById("duck");       // referencia do pato
let posX = 0;                                       // posicao x do pato
let posY = 0;                                       // posicao y do pato
let velocity = 5;                                   // velocidade do pato
const keys = {w:false, a:false, s:false, d:false, shift:false}   // teclas de movimentacao
const heightScreen = window.innerHeight;            // altura da tela
const widthScreen = window.innerWidth;              // largura da tela
const heightDuck = duck.offsetHeight;               // altura do pato
const widthDuck = duck.offsetWidth;                 // largura do pato
let energy = 100;
const costRun = 10;

document.addEventListener("keydown", function(event){
    const button = event.key.toLowerCase();
    if (keys.hasOwnProperty(button)){         // hasOwnProperty() serve pra verificar se uma variavel tem aquela propriedade
        keys[button] = true;                  // no caso do keys.hasOwnProperty(button) verifica se keys tem o botao pressionado
    }
});

document.addEventListener("keyup", function(event){
    const button = event.key.toLowerCase();
    if (keys.hasOwnProperty(button)){         // hasOwnProperty() serve pra verificar se uma variavel tem aquela propriedade
        keys[button] = false;                 // no caso do keys.hasOwnProperty(button) verifica se keys tem o botao que deixou de ser pressionado
    }
});

function gameLoop(){
    let currentVelocity;

    if (energy > 100) {energy = 100} else if (energy < 0) {energy = 0}

    if (keys.shift){
        currentVelocity=10;                    // se shift estiver sendo clicado a velocidade atual recebe 15
        energy -= costRun;
        console.log(energy);
    }       
    else {
        currentVelocity=velocity;              // senao a velocidade atual recebe o valor normal (5)
        energy += costRun;
        console.log(energy);
    }              

    if (keys.w) {posY -= currentVelocity;}
    if (keys.s) {posY += currentVelocity;}
    if (keys.a) {posX -= currentVelocity; duck.style.transform = "scale(-1, 1)";}
    if (keys.d) {posX += currentVelocity; duck.style.transform = "scale(1, 1)";}

    if (posX < 0){
        posX = 0;
    }else if(posX > widthScreen - widthDuck){
        posX = widthScreen - widthDuck;
    }

    if (posY < 0){
        posY = 0;
    }else if(posY > heightScreen - heightDuck){
        posY = heightScreen - heightDuck;
    }

    duck.style.left = posX + "px";
    duck.style.top = posY + "px";

    requestAnimationFrame(gameLoop);
}

gameLoop()      // inicio o game loop do jogo