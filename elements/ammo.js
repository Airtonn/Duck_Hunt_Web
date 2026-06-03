const MAX_BULLETS = 5;
let currentAmmo = MAX_BULLETS;

const bullets = document.querySelectorAll('#ammo .ammo-pip');

function updateAmmoDisplay() {
  bullets.forEach((bullet, i) => {
    if (i < currentAmmo) {
      bullet.classList.remove('spent');
    } else {
      bullet.classList.add('spent');
    }
  });
}

export function consumeBullet() {
  if (currentAmmo > 0) {
    currentAmmo--;
    updateAmmoDisplay();
  }
}

export function reload() {
  currentAmmo = MAX_BULLETS;
  updateAmmoDisplay();
}

export function getAmmo() {
  return currentAmmo;
}

export function emptyAmmo() {
  currentAmmo = 0;
  updateAmmoDisplay();
}