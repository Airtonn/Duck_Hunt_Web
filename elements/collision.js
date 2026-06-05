import { bullets, triggerPenaltyReload } from './shoot.js';
import { dogs } from './dog.js';
import { hunters, hunterWidth, hunterHeight } from './hunter.js';
import { addPoint } from './score.js';
import { takeDamage } from './duck.js';
import { energyItem, collectEnergy } from './energy.js';

export function verifyColision(duckPos, widthDuck, heightDuck) {

    // ── Colisão: Bala vs Cachorro ─────────────────────────────
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
                bullet.el.remove();
                bullets.splice(i, 1);
                dog.element.dispatchEvent(new CustomEvent("dogShot", { bubbles: true }));
                addPoint(10);
                break;
            }
        }
    }

    // ── Colisão: Bala vs Caçador ──────────────────────────────
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        if (bullet.shooter !== "duck") continue;

        for (let j = hunters.length - 1; j >= 0; j--) {
            const hunter = hunters[j];
            if (!hunter.alive) continue;

            const hitHunter =
                bullet.x < hunter.posX + hunterWidth &&
                bullet.x + 15 > hunter.posX &&
                bullet.y < hunter.posY + hunterHeight &&
                bullet.y + 15 > hunter.posY;

            if (hitHunter) {
                bullet.el.remove();
                bullets.splice(i, 1);
                hunter.element.dispatchEvent(new CustomEvent("hunterShot", { bubbles: true }));
                addPoint(20);
                break;
            }
        }
    }

    // ── Colisão: Bala do Caçador vs Pato ──────────────────────
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        if (bullet.shooter !== "hunter") continue;

        const hitDuck =
            bullet.x < duckPos.posX + widthDuck &&
            bullet.x + 15 > duckPos.posX &&
            bullet.y < duckPos.posY + heightDuck &&
            bullet.y + 15 > duckPos.posY;

        if (hitDuck) {
            bullet.el.remove();
            bullets.splice(i, 1);
            takeDamage(20, "hunter");   // bala do caçador dói mais
        }
    }

    // ── Colisão: Cachorro vs Pato ─────────────────────────────
    dogs.forEach(dog => {
        if (!dog.alive || dog.respawning || dog.hasDealtDamage) return;

        const hitDuck =
            dog.posX < duckPos.posX + widthDuck &&
            dog.posX + 100 > duckPos.posX &&
            dog.posY < duckPos.posY + heightDuck &&
            dog.posY + 100 > duckPos.posY;

        if (hitDuck) {
            dog.hasDealtDamage = true;
            takeDamage(10, "dog");
            triggerPenaltyReload();
            dog.element.dispatchEvent(new CustomEvent("dogHit", { bubbles: true }));
        }
    });

    // ── Colisão: Pato vs Caçador (contato corpo a corpo) ──────
    hunters.forEach(hunter => {
        if (!hunter.alive || hunter.hasDealtContactDamage) return;

        const hitHunter =
            duckPos.posX < hunter.posX + hunterWidth &&
            duckPos.posX + widthDuck > hunter.posX &&
            duckPos.posY < hunter.posY + hunterHeight &&
            duckPos.posY + heightDuck > hunter.posY;

        if (hitHunter) {
            hunter.hasDealtContactDamage = true;
            takeDamage(10, "hunter");

            // Reseta o flag após um breve cooldown para não spammar dano
            setTimeout(() => {
                hunter.hasDealtContactDamage = false;
            }, 800);
        }
    });

    // ── Colisão: Pato vs Item de Energia ──────────────────────
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