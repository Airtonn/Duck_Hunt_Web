import { bullets, triggerPenaltyReload } from './shoot.js';
import { dogs } from './dog.js';
import { hunters, hunterWidth, hunterHeight } from './hunter.js';
import { addPoint } from './score.js';
import { duck, duckPos, takeDamage } from './duck.js';
import { energyItem, collectEnergy } from './energy.js';
import { lifeItem, collectLife } from './life.js';

export function verifyColision() {
    // Solucao 3: le tamanho real do pato via DOM a cada verificacao
    const widthDuck  = duck.offsetWidth  || 100;
    const heightDuck = duck.offsetHeight || 100;

    // ── Colisão: Bala vs Cachorro ─────────────────────────────
    // ── Único loop para balas do pato: verifica cachorro E caçador ──
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        if (bullet.shooter !== "duck") continue;

        let hit = false;

        // Cachorro — Solucao 3: tamanho real via offsetWidth/Height
        for (let j = dogs.length - 1; j >= 0; j--) {
            const dog = dogs[j];
            if (!dog.alive || dog.respawning) continue;

            const dw = dog.element.offsetWidth  || 100;
            const dh = dog.element.offsetHeight || 100;

            if (
                bullet.x < dog.posX + dw &&
                bullet.x + 15 > dog.posX &&
                bullet.y < dog.posY + dh &&
                bullet.y + 15 > dog.posY
            ) {
                bullet.el.remove();
                bullets.splice(i, 1);
                dog.element.dispatchEvent(new CustomEvent("dogShot", { bubbles: true }));
                addPoint(10);
                hit = true;
                break;
            }
        }

        if (hit) continue;

        // Caçador — Solucao 3: tamanho real via offsetWidth/Height
        for (let j = hunters.length - 1; j >= 0; j--) {
            const hunter = hunters[j];
            if (!hunter.alive) continue;

            const hw = hunter.element.offsetWidth  || hunter.width  || hunterWidth;
            const hh = hunter.element.offsetHeight || hunter.height || hunterHeight;

            if (
                bullet.x < hunter.posX + hw &&
                bullet.x + 15 > hunter.posX &&
                bullet.y < hunter.posY + hh &&
                bullet.y + 15 > hunter.posY
            ) {
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

        const dw = dog.element.offsetWidth  || 100;
        const dh = dog.element.offsetHeight || 100;

        const hitDuck =
            dog.posX < duckPos.posX + widthDuck &&
            dog.posX + dw > duckPos.posX &&
            dog.posY < duckPos.posY + heightDuck &&
            dog.posY + dh > duckPos.posY;

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

        const hw = hunter.element.offsetWidth  || hunter.width  || hunterWidth;
        const hh = hunter.element.offsetHeight || hunter.height || hunterHeight;
        const hitHunter =
            duckPos.posX < hunter.posX + hw &&
            duckPos.posX + widthDuck > hunter.posX &&
            duckPos.posY < hunter.posY + hh &&
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

    // ── Colisão: Pato vs Item de Vida ─────────────────────────
    if (lifeItem) {
        const hitLife =
            duckPos.posX < lifeItem.posX + 50 &&
            duckPos.posX + widthDuck > lifeItem.posX &&
            duckPos.posY < lifeItem.posY + 50 &&
            duckPos.posY + heightDuck > lifeItem.posY;

        if (hitLife) {
            collectLife();
        }
    }
}