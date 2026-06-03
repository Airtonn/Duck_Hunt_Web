const scoreElement = document.getElementById('score');

let currentScore = parseInt(localStorage.getItem('duck_hunt_score') || '0', 10);

// Inicializa a interface com o score carregado
if (scoreElement) {
    scoreElement.innerText = currentScore.toString().padStart(5, '0');
}

function saveScore() {
    localStorage.setItem('duck_hunt_score', currentScore);
}

export function addPoint(amount) {
    currentScore += amount;
    if (currentScore < 0) currentScore = 0;

    scoreElement.innerText = currentScore.toString().padStart(5, '0');
    saveScore();
}

export function resetScore() {
    currentScore = 0;
    scoreElement.innerText = "00000";
    saveScore();
    console.log("score resetado");
}

export function getScore() {
    return currentScore; // Retorna o número real, útil se precisar comparar depois
}
