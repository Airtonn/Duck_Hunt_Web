console.log("Duck Hunt Menu: script loaded");

const initMenu = () => {
    console.log("Duck Hunt Menu: Initializing...");
    const mainMenu = document.getElementById('main-menu');
    const instructions = document.getElementById('instructions');
    const gameUI = document.getElementById('game-ui');

    const playBtn = document.getElementById('play-btn');
    const howToPlayBtn = document.getElementById('how-to-play-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    const levelSelection = document.getElementById('level-selection');
    const level1Btn = document.getElementById('level1-btn');
    const level2Btn = document.getElementById('level2-btn');
    const level3Btn = document.getElementById('level3-btn');
    const backFromLevelsBtn = document.getElementById('back-from-levels-btn');

    let currentLevel = null;

    if (!mainMenu || !instructions || !gameUI || !playBtn || !howToPlayBtn || !backToMenuBtn || !levelSelection || !level1Btn || !level2Btn || !level3Btn || !backFromLevelsBtn) {
        console.error("Duck Hunt Menu: One or more elements not found!", {
            mainMenu: !!mainMenu,
            instructions: !!instructions,
            gameUI: !!gameUI,
            playBtn: !!playBtn,
            howToPlayBtn: !!howToPlayBtn,
            backToMenuBtn: !!backToMenuBtn,
            levelSelection: !!levelSelection,
            level1Btn: !!level1Btn,
            level2Btn: !!level2Btn,
            level3Btn: !!level3Btn,
            backFromLevelsBtn: !!backFromLevelsBtn
        });
        return;
    }

    playBtn.addEventListener('click', () => {
        console.log("Duck Hunt Menu: Jogar clicked -> Showing Level Selection");
        mainMenu.style.display = 'none';
        levelSelection.style.display = 'flex';
    });

    level1Btn.addEventListener('click', () => {
        console.log("Duck Hunt Menu: Level 1 selected");
        currentLevel = 1;
        levelSelection.style.display = 'none';
        gameUI.style.display = 'block';
        document.dispatchEvent(new CustomEvent('startLevel1'));
    });

    level2Btn.addEventListener('click', () => {
        console.log("Duck Hunt Menu: Level 2 selected");
        currentLevel = 2;
        levelSelection.style.display = 'none';
        gameUI.style.display = 'block';
        document.dispatchEvent(new CustomEvent('startLevel2'));
    });

    level3Btn.addEventListener('click', () => {
        console.log("Duck Hunt Menu: Level 3 selected");
        currentLevel = 3;
        levelSelection.style.display = 'none';
        gameUI.style.display = 'block';
        document.dispatchEvent(new CustomEvent('startLevel3'));
    });

    const restartGameOverBtn = document.getElementById('restart-game-over-btn');
    if (restartGameOverBtn) {
        restartGameOverBtn.addEventListener('click', () => {
            console.log(`Duck Hunt Menu: Restarting Level ${currentLevel}`);
            if (currentLevel === 1) document.dispatchEvent(new CustomEvent('startLevel1'));
            else if (currentLevel === 2) document.dispatchEvent(new CustomEvent('startLevel2'));
            else if (currentLevel === 3) document.dispatchEvent(new CustomEvent('startLevel3'));
        });
    }

    backFromLevelsBtn.addEventListener('click', () => {
        levelSelection.style.display = 'none';
        mainMenu.style.display = 'flex';
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

    document.addEventListener('returnToMenu', () => {
        console.log("Duck Hunt Menu: returnToMenu event received");
        gameUI.style.display = 'none';
        document.getElementById('game-over').style.display = 'none';
        mainMenu.style.display = 'flex';
        currentLevel = null;

        // Import and call resets
        import('./index.js').then(({ resetEnergyItem, resetLifeItem }) => {
            resetEnergyItem();
            resetLifeItem();
        });
    });

    console.log("Duck Hunt Menu: Initialization complete");
};

// If document is already ready, init immediately
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initMenu();
} else {
    document.addEventListener('DOMContentLoaded', initMenu);
}
