import { bullets } from './shoot.js';
import { dogs } from './dog.js';
import { addPoint } from './score.js';
import { takeDamage } from './duck.js';
import { energyItem, collectEnergy } from './energy.js';

export function verifyColision(duckPos, widthDuck, heightDuck) {
    // Colisão: Bala vs Cachorro
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        if (bullet.shooter !== "duck") continue;

        for (let j = dogs.length - 1; j >= 0; j--) {
            const dog = dogs[j];
            if (!dog.alive || dog.respawning) continue;

            const hitDog =
                bullet.x < dog.posX + 100 &&
                bullet.x + 15 > dog.posX &&
                bullet.y < dog.posY + 100 &&
                bullet.y + 15 > dog.posY;

            if (hitDog) {
                // Remove a bala da tela e do array
                bullet.el.remove();
                bullets.splice(i, 1);

                // Dispara o evento indicando que o cachorro foi atingido
                dog.element.dispatchEvent(new CustomEvent("dogShot", { bubbles: true }));

                // Adiciona 10 pontos ao jogador
                addPoint(10);
                break;
            }
        }
    }

    // Colisão: Cachorro vs Pato (Jogador)
    dogs.forEach(dog => {
        if (!dog.alive || dog.respawning || dog.hasDealtDamage) return;

        const hitDuck =
            dog.posX < duckPos.posX + widthDuck &&
            dog.posX + 100 > duckPos.posX &&
            dog.posY < duckPos.posY + heightDuck &&
            dog.posY + 100 > duckPos.posY;

        if (hitDuck) {
            dog.hasDealtDamage = true;

            // Causa dano ao pato
            takeDamage(10, "dog");

            // Dispara o evento CustomEvent para compatibilidade
            dog.element.dispatchEvent(new CustomEvent("dogHit", { bubbles: true }));
        }
    });

    // Colisão: Pato vs Item de Energia
    if (energyItem) {
        const hitEnergy =
            duckPos.posX < energyItem.posX + 50 &&
            duckPos.posX + widthDuck > energyItem.posX &&
            duckPos.posY < energyItem.posY + 50 &&
            duckPos.posY + heightDuck > energyItem.posY;

        if (hitEnergy) {
            collectEnergy();
        }
    }
}
