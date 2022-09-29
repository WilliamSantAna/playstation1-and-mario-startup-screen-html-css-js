const dg = dir + game;

const callPresentsScreen = () => {
    loadScreen(dg + '/presents.html', (html) => {
        addCssToPage(dg + '/css/presents.css');
        addJsToPage(dg + '/js/presents.js');
        document.getElementById(game).innerHTML = html;
        playSound(dg + '/media/presents.mp3');
    });
}

const callMenuScreen = () => {
    loadScreen(dg + '/menu.html', (html) => {
        addCssToPage(dg + '/css/menu.css');
        addJsToPage(dg + '/js/menu.js');
        document.getElementById(game).innerHTML = html;
        playSound(dg + '/media/menu.mp3', 150000);
    });
};

callPresentsScreen();
window.setTimeout(callMenuScreen, 2000); 
