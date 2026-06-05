import { setDuckLife } from './duck.js';

const heightScreen = window.innerHeight;        // altura da tela
const widthScreen = window.innerWidth;          // largura da tela
const lifeWidth = 50;                           // largura do item de vida
const lifeHeight = 50;                          // altura do item de vida

export let lifeItem = null;                     // guarda o objeto do item de vida

// funcao para gerar uma posicao aleatoria para o item de vida
function getRandomPosition() {
    const posX = Math.random() * (widthScreen - lifeWidth);
    const posY = Math.random() * (heightScreen - lifeHeight);
    return { posX, posY };
}

// funcao para atualizar a posicao visual do item de vida
function updateLifeItemPosition() {
    if (lifeItem) {
        lifeItem.element.style.left = lifeItem.posX + "px";
        lifeItem.element.style.top = lifeItem.posY + "px";
    }
}

// funcao para criar e posicionar o item de vida na tela
export function spawnLifeItem() {
    if (lifeItem) {
        lifeItem.element.remove();
    }
    const el = document.createElement("div");   // cria o elemento div do item de vida
    el.id = "lifeItem";                         // define o id do elemento

    el.style.position = "absolute";
    el.style.backgroundImage = "url('images/life.png')";
    el.style.backgroundSize = "contain";
    el.style.backgroundRepeat = "no-repeat";
    el.style.width = lifeWidth + "px";
    el.style.height = lifeHeight + "px";
    el.style.zIndex = "5";

    document.body.appendChild(el);              // adiciona ao corpo do documento

    const pos = getRandomPosition();
    lifeItem = {
        element: el,
        posX: pos.posX,
        posY: pos.posY
    };

    updateLifeItemPosition();
}

// funcao para coletar o item de vida e colocar em nova posicao aleatoria
export function collectLife() {
    setDuckLife(100);                           // sobe a vida para 100

    const pos = getRandomPosition();            // gera nova posicao aleatoria
    lifeItem.posX = pos.posX;
    lifeItem.posY = pos.posY;

    updateLifeItemPosition();                   // atualiza a posicao na tela
}
