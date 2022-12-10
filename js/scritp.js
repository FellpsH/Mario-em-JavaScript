const mario = document.querySelector('.mario'); 
const pipe = document.querySelector('.pipe'); 


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() =>{

    const pipePositon = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px','');
    console.log(marioPositon);
    if (pipePositon <= 120 && pipePositon > 0 && marioPositon < 80) {
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPositon}px`;
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePositon}px`;

        mario.src ='./images/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'
        
        clearInterval(loop);
    }

},10);

document.addEventListener('keydown', jump);

console.log("teste");