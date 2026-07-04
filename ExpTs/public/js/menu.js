console.log("Menu Duck Hunt: script carregado");

const initMenu = () => {
    console.log("Menu Duck Hunt: Inicializando...");
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
        console.error("Menu Duck Hunt: Um ou mais elementos não encontrados!", {
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

    const navbar = document.querySelector('.navbar');

    playBtn.addEventListener('click', () => {
        console.log("Menu Duck Hunt: Jogar clicado -> Exibindo Seleção de Fase");
        mainMenu.style.display = 'none';
        if (navbar) navbar.style.display = 'none';
        levelSelection.style.display = 'flex';
    });

    level1Btn.addEventListener('click', () => {
        console.log("Menu Duck Hunt: Fase 1 selecionada");
        currentLevel = 1;
        levelSelection.style.display = 'none';
        if (navbar) navbar.style.display = 'none';
        gameUI.style.display = 'block';
        document.dispatchEvent(new CustomEvent('startLevel1'));
    });

    level2Btn.addEventListener('click', () => {
        console.log("Menu Duck Hunt: Fase 2 selecionada");
        currentLevel = 2;
        levelSelection.style.display = 'none';
        if (navbar) navbar.style.display = 'none';
        gameUI.style.display = 'block';
        document.dispatchEvent(new CustomEvent('startLevel2'));
    });

    level3Btn.addEventListener('click', () => {
        console.log("Menu Duck Hunt: Fase 3 selecionada");
        currentLevel = 3;
        levelSelection.style.display = 'none';
        if (navbar) navbar.style.display = 'none';
        gameUI.style.display = 'block';
        document.dispatchEvent(new CustomEvent('startLevel3'));
    });

    const restartGameOverBtn = document.getElementById('restart-game-over-btn');
    if (restartGameOverBtn) {
        restartGameOverBtn.addEventListener('click', () => {
            console.log(`Menu Duck Hunt: Reiniciando Fase ${currentLevel}`);
            if (currentLevel === 1) document.dispatchEvent(new CustomEvent('startLevel1'));
            else if (currentLevel === 2) document.dispatchEvent(new CustomEvent('startLevel2'));
            else if (currentLevel === 3) document.dispatchEvent(new CustomEvent('startLevel3'));
        });
    }

    backFromLevelsBtn.addEventListener('click', () => {
        levelSelection.style.display = 'none';
        mainMenu.style.display = 'flex';
        if (navbar) navbar.style.display = 'flex';
    });

    howToPlayBtn.addEventListener('click', () => {
        console.log("Menu Duck Hunt: Como Jogar clicado");
        mainMenu.style.display = 'none';
        if (navbar) navbar.style.display = 'none';
        instructions.style.display = 'flex';
    });

    backToMenuBtn.addEventListener('click', () => {
        console.log("Menu Duck Hunt: Voltar clicado");
        instructions.style.display = 'none';
        mainMenu.style.display = 'flex';
        if (navbar) navbar.style.display = 'flex';
    });

    document.addEventListener('returnToMenu', () => {
        console.log("Menu Duck Hunt: evento returnToMenu recebido");
        gameUI.style.display = 'none';
        document.getElementById('game-over').style.display = 'none';
        mainMenu.style.display = 'flex';
        if (navbar) navbar.style.display = 'flex';
        currentLevel = null;

        // Importa e chama os resets
        import('./index.js').then(({ resetEnergyItem, resetLifeItem }) => {
            resetEnergyItem();
            resetLifeItem();
        });
    });

    document.addEventListener('saveScore', async (e) => {
        const score = e.detail.score;
        console.log(`Menu Duck Hunt: Salvando pontuação de ${score} no servidor...`);
        try {
            await fetch('/score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ score })
            });
            console.log('Menu Duck Hunt: Pontuação salva com sucesso.');
        } catch (error) {
            console.error('Menu Duck Hunt: Erro ao salvar pontuação:', error);
        }
    });

    console.log("Menu Duck Hunt: Inicialização completa");
};

// Se o documento já estiver pronto, inicializa imediatamente
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initMenu();
} else {
    document.addEventListener('DOMContentLoaded', initMenu);
}
