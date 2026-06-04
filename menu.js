console.log("Duck Hunt Menu: script loaded");

const initMenu = () => {
    console.log("Duck Hunt Menu: Initializing...");
    const mainMenu = document.getElementById('main-menu');
    const instructions = document.getElementById('instructions');
    const gameUI = document.getElementById('game-ui');

    const playBtn = document.getElementById('play-btn');
    const howToPlayBtn = document.getElementById('how-to-play-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    if (!mainMenu || !instructions || !gameUI || !playBtn || !howToPlayBtn || !backToMenuBtn) {
        console.error("Duck Hunt Menu: One or more elements not found!", {
            mainMenu: !!mainMenu,
            instructions: !!instructions,
            gameUI: !!gameUI,
            playBtn: !!playBtn,
            howToPlayBtn: !!howToPlayBtn,
            backToMenuBtn: !!backToMenuBtn
        });
        return;
    }

    playBtn.addEventListener('click', () => {
        console.log("Duck Hunt Menu: Jogar clicked");
        mainMenu.style.display = 'none';
        gameUI.style.display = 'block';

        // Dispatch a custom event to start the game
        console.log("Duck Hunt Menu: Dispatching startGame event");
        const event = new CustomEvent('startGame');
        document.dispatchEvent(event);
    });

    howToPlayBtn.addEventListener('click', () => {
        console.log("Duck Hunt Menu: Como Jogar clicked");
        mainMenu.style.display = 'none';
        instructions.style.display = 'flex';
    });

    backToMenuBtn.addEventListener('click', () => {
        console.log("Duck Hunt Menu: Voltar clicked");
        instructions.style.display = 'none';
        mainMenu.style.display = 'flex';
    });

    console.log("Duck Hunt Menu: Initialization complete");
};

// If document is already ready, init immediately
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initMenu();
} else {
    document.addEventListener('DOMContentLoaded', initMenu);
}
