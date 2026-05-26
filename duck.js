const duck = document.getElementById("duck");       // referencia do pato
let posX = 0;                                       // posicao x do pato
let posY = 0;                                       // posicao y do pato
let velocity = 5;                                   // velocidade do pato
const keys = {w:false, a:false, s:false, d:false}   // teclas de movimentacao
const heightScreen = window.innerHeight;            // altura da tela
const widthScreen = window.innerWidth;              // largura da tela
const heightDuck = duck.offsetHeight;               // altura do pato
const widthDuck = duck.offsetWidth;                 // largura do pato

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

    if (keys.w) {posY -= velocity;}
    if (keys.s) {posY += velocity;}
    if (keys.a) {posX -= velocity; duck.style.transform = "scale(-1, 1)";}
    if (keys.d) {posX += velocity; duck.style.transform = "scale(1, 1)";}

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