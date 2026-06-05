import {
    moveDuck, spawnDogs, updateDogs, updateBullets, duckPos, duckWidth, duckHeight,
    spawnBullet, verifyColision, spawnEnergyItem, spawnHunters
} from '../index.js';

document.addEventListener('startGame', () => {
    // As funcoes de spawn sao executadas apenas uma vez na inicializacao do nivel (fora do gameLoop).
    // Se estivessem dentro do loop, seriam chamadas 60 vezes por segundo, gerando milhares de 
    // elementos no HTML e travando o navegador por sobrecarga de memoria e processamento.
    spawnDogs(duckPos, 4, 10);                               // cria os 4 cachorros iniciais na tela
    spawnEnergyItem();                                       // cria o item de energia inicial na tela
    spawnHunters(2);                                         // cria os 2 caçadores

    // funcao do loop principal do jogo (executada aproximadamente 60 vezes por segundo)
    function gameLoop() {
        moveDuck();                                          // atualiza o movimento e controles do pato
        updateDogs(duckPos, 10);                             // atualiza posicao, direcao e respawn dos cachorros
        updateBullets();                                     // atualiza a trajetoria das balas atiradas
        verifyColision(duckPos, duckWidth, duckHeight);      // executa checagens de colisao (bala, cachorro, energia)
        requestAnimationFrame(gameLoop);                     // agenda o proximo ciclo de renderizacao
    }

    gameLoop();                                              // inicia a execucao do loop de jogo

    // evento disparado quando o cachorro atinge o pato
    document.body.addEventListener("dogHit", () => {
        console.log("Dano no pato");                         // mensagem de log indicando dano recebido
    });

    // evento de clique de mouse para disparo
    document.addEventListener("mousedown", function (event) {
        if (event.button === 0) {                            // se o botao esquerdo do mouse for clicado
            spawnBullet(event.clientX, event.clientY, duckPos, duckWidth, duckHeight, "duck"); // dispara uma bala
        }
    });
});

