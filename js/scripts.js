var game = null;
var dir = 'rom/';

const setGame = (g) => {
    game = g;
};

const playSound = (url, stop) => {
    var audioElement = document.getElementById('audio-opening');
    audioElement.autoplay = false;
    audioElement.pause();
    audioElement.currentTime = 0; 

    var sourceElement = audioElement.firstElementChild;
    sourceElement.src = url;
    sourceElement.type = 'audio/' + url.substr(-3);

    audioElement.load(); 
    audioElement.play();

    if (stop != undefined) {
        window.setTimeout(() => { 
            audioElement.pause();
            audioElement.currentTime = 0; 
        }, stop);
    }
};

const tocaSomAbertura = () => {
    playSound('media/opening.ogg');
};

const iniciaTelaBranca = () => {
    document.getElementById('tela-branca').style.display = 'grid';
    document.getElementById('tela-preta').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('quadrado-menor-esquerda').style.animationName = 'tela-branca-quadrado-esquerda-deslizar-pra-cima';
    document.getElementById('quadrado-menor-direita').style.animationName = 'tela-branca-quadrado-direita-deslizar-pra-baixo';
};

const iniciaTelaPreta = () => {
    document.getElementById('tela-branca').style.display = 'none';
    document.getElementById('tela-preta').style.display = 'grid';
    document.getElementById('game').style.display = 'none';
    document.getElementById('tela-preta').style.animationName = 'tela-branca-transicao-para-tela-preta';
    document.getElementById('play-station-brand').style.animation = 'fadeIn 0.5s linear 1s forwards';
};

const ligarTv = () => {
    document.getElementById('tela').style.display = 'none';
};

const desligarTv = () => {
    document.querySelectorAll('div#tv > div').style.display = 'none';
    document.getElementById('tela').style.display = 'grid';
};

const startOpening = () => {
    ligarTv();
    tocaSomAbertura();
    iniciaTelaBranca();
    window.setTimeout(iniciaTelaPreta, 7 * 1000);
    window.setTimeout(loadGame, 15 * 1000);
};

const startVideoGame = () => {
    window.setTimeout(startOpening, 500);
};

const loadScreen = (url, callback) => {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = () => { 
        callback(xhttp.responseText); 
    };
    const time = (new Date()).getTime();
	xhttp.open("GET", url + '?' + time, true);
	xhttp.send();
};

const addCssToPage = (url) => {
    let css = document.createElement('link');
    const time = (new Date()).getTime();
    css.href = url + '?' + time;
    css.rel = 'stylesheet';
    document.getElementById('head').appendChild(css);
};

const addJsToPage = (url) => {
    let script = document.createElement('script');
    const time = (new Date()).getTime();
    script.src = url + '?' + time;
    document.getElementById('head').appendChild(script);
}

const loadGame = () => {
	const url = dir + game + '/' + game + '.html';
	const callback = (responseText) => {
        document.getElementById('tela').style.display = 'none';
        document.getElementById('tela-branca').style.display = 'none';
        document.getElementById('tela-preta').style.display = 'none';
        document.getElementById('game').style.display = 'grid';
		
        addCssToPage(dir + game + '/css/' + game + '.css');
        addJsToPage(dir + game + '/js/' + game + '.js');

        document.getElementById('game').innerHTML = responseText;
	};
    loadScreen(url, callback);
};

document.addEventListener("DOMContentLoaded", function(e) {
    setGame('ps1-mario-world');
    window.setTimeout(startVideoGame, 1000);
    //loadGame();
});