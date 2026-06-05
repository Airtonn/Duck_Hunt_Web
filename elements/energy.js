import { setDuckEnergy } from './duck.js';

const heightScreen = window.innerHeight;        // altura da tela
const widthScreen = window.innerWidth;          // largura da tela
const energyWidth = 50;                         // largura do item de energia
const energyHeight = 50;                        // altura do item de energia

export let energyItem = null;                   // guarda o objeto do item de energia

// funcao para gerar uma posicao aleatoria para o item de energia
function getRandomPosition() {
    const posX = Math.random() * (widthScreen - energyWidth);
    const posY = Math.random() * (heightScreen - energyHeight);
    return { posX, posY };
}

// funcao para atualizar a posicao visual do item de energia
function updateEnergyItemPosition() {
    if (energyItem) {
        energyItem.element.style.left = energyItem.posX + "px";
        energyItem.element.style.top = energyItem.posY + "px";
    }
}

// funcao para criar e posicionar o item de energia na tela
export function spawnEnergyItem() {
    const el = document.createElement("div");   // cria o elemento div do item de energia
    el.id = "energyItem";                       // define o id do elemento

    el.style.position = "absolute";
    el.style.backgroundImage = "url('images/energy.png')";
    el.style.backgroundSize = "contain";
    el.style.backgroundRepeat = "no-repeat";
    el.style.width = energyWidth + "px";
    el.style.height = energyHeight + "px";
    el.style.zIndex = "5";

    document.body.appendChild(el);              // adiciona ao corpo do documento

    const pos = getRandomPosition();
    energyItem = {
        element: el,
        posX: pos.posX,
        posY: pos.posY
    };

    updateEnergyItemPosition();
}

// funcao para coletar o item de energia e colocar em nova posicao aleatoria
export function collectEnergy() {
    setDuckEnergy(100);                         // sobe a energia para 100

    const pos = getRandomPosition();            // gera nova posicao aleatoria
    energyItem.posX = pos.posX;
    energyItem.posY = pos.posY;

    updateEnergyItemPosition();                 // atualiza a posicao na tela
}
