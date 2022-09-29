const mario = document.getElementById('mario');
const jumpSprite = '517px -111px';
const standSprite = '515px 0px';

const startMarioMovements = () => {
    window.setTimeout(marioEnter);
};


const marioEnter = () => {
    mario.style.animation = 'mario-move-to-left-animation 1000ms linear forwards, walking-animation 500ms steps(2) infinite';
    window.setTimeout(marioJumpToM2, 1200);
};

const marioJumpToM2 = () => {
    const t = 700;
    mario.style.animation = 'mario-jump-to-m2-animation ' + t + 'ms ease-out forwards';
    mario.style.backgroundPosition = jumpSprite;
    window.setTimeout(() => { mario.style.backgroundPosition = standSprite; }, t + 10);
    window.setTimeout(marioJumpToB3, t + 500);
};

const marioJumpToB3 = () => {
    const t = 500;
    mario.style.backgroundPosition = jumpSprite;
    mario.style.animation = 'mario-jump-to-b3-animation ' + t + 'ms linear forwards';
    
    window.setTimeout(() => { 
        document.getElementById('b3').classList.add('fechado'); 
        document.getElementById('escada').style.animation = 'escada-animation 2s linear forwards';
    }, t/2);
    
    window.setTimeout(() => { mario.style.backgroundPosition = standSprite; }, t + 10);
    window.setTimeout(jumpToB3Up, t + 500);
};

const jumpToB3Up = () => {
    const t = 800;
    mario.style.backgroundPosition = jumpSprite;
    mario.style.animation = 'mario-jump-to-torpedo-animation ' + t + 'ms linear forwards';
    window.setTimeout(() => { mario.style.animation = 'mario-mario-torpedo-to-ground-animation 700ms linear forwards'; }, t);
    window.setTimeout(() => { mario.style.backgroundPosition = standSprite; }, 700);
    window.setTimeout(dieTorpedo, t);

};

const dieTorpedo = () => {
    const t = 4000;
    document.getElementById('torpedo').style.animation = 'torpedo-die-spin-animation 300ms linear infinite, torpedo-die-fall-animation ' + t + 'ms linear forwards';
    window.setTimeout(marioMoveToB5, t - 1000);
};

const marioMoveToB5 = () => {
    const t = 1000;
    mario.style.animation = 'mario-move-to-b5-animation ' + t + 'ms linear forwards, mario-backflip 500ms linear 2';
    window.setTimeout(marioJumpToB5, t + 50);
};

const marioJumpToB5 = () => {
    const t = 500;
    mario.style.backgroundPosition = jumpSprite;
    mario.style.animation = 'mario-jump-to-b5-animation ' + t + 'ms linear forwards';
    window.setTimeout(showBoxMessage, 250);
    window.setTimeout(() => { mario.style.backgroundPosition = standSprite; }, t + 10);
};

const showBoxMessage = () => {  
    const box = document.getElementById('box-message');
    box.style.display = 'grid';
    box.style.animation = 'show-box-mesage-animation 1s linear forwards';
    playSound(dg + '/media/msg.mp3');
    window.setTimeout(() => { box.style.display = 'none'; }, 30000);
};

window.setTimeout(startMarioMovements, 2000);
