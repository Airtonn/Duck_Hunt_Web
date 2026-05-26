const duck = document.getElementById("duck");
let posX = 0;
let posY = 0;
let velocity = 5;
const keys = {w:false, a:false, s:false, d:false}   // teclas de movimentacao

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

    duck.style.left = posX + "px";
    duck.style.top = posY + "px";

    requestAnimationFrame(gameLoop);
}

gameLoop()      // inicio o game loop do jogo