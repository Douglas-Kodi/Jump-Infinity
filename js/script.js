var startflag = "true";
var gameflag = "false";
var overflag = "false";


const gamestart = document.querySelector('.gamestart');
const gameover = document.querySelector('.gameover');
const select1 = document.querySelector('.select1');
const select2 = document.querySelector('.select2');
if(startflag=="true"){
    startflag = "false";
    document.addEventListener('keydown', (event) => {
        const acceptedMoves = {
            ArrowUp(){
                select2.style.display = 'none';
                select1.style.display = 'block';
            },
            ArrowDown(){   
                select1.style.display = 'none';
                select2.style.display = 'block';
            },
            Enter(){
                if(gamestart.style.display=='block'){
                    if(select1.style.display=='block'){
                        gameflag = "true";
                        gameplay();
                    }
                    if(select2.style.display=='block'){
                        alert("Space and ArrowUp for Jump");
                    }
                }
            }
        }
        const keyPressed = event.key;
        const moveFunction = acceptedMoves[keyPressed];
        if(moveFunction){
            moveFunction();
        }
    });
}
function gameplay(){
    if(gameflag=="true"){
        gameflag = "false";
        playSoundStart();
        const gamestart = document.querySelector('.gamestart');
        const gameover = document.querySelector('.gameover');
        const mario = document.querySelector('.mario');
        const pipe = document.querySelector('.pipe');

        gamestart.style.display = 'none';
        gameover.style.display = 'none';
        pipe.classList.add('start');

        const loop = setInterval(() =>{

            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

            if((pipePosition < 120)&&(pipePosition > 0)&&( marioPosition <80)){

                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                mario.style.bottom = `${marioPosition}px`;
                mario.src = './images/game-over.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '50px';
                mario.classList.add('death');
                mario.style.bottom = '-120px';

                clearInterval(loop);

                gameover.style.display = 'block';
                overflag = "true";
                over();
                pauseSoundStart();
                playSoundOver();
            }
        }, 10)
        document.addEventListener('keydown', (event) => {

            const acceptedMoves = {
                ArrowUp(){
                    if(pipe.classList.contains('start')){   
                        mario.classList.add('jump');

                        setTimeout(() => {

                            mario.classList.remove('jump');

                        }, 500);
                    }
                },
                " "(){
                    if(pipe.classList.contains('start')){  
                        mario.classList.add('jump');

                        setTimeout(() => {

                            mario.classList.remove('jump');

                        }, 500);
                    }
                }
            }
            const keyPressed = event.key;
            const moveFunction = acceptedMoves[keyPressed];
            if(moveFunction){
                moveFunction();
            }
        });
    }
}
function over(){
    if(overflag=="true"){
        overflag = "false";
        const gamestart = document.querySelector('.gamestart');
        const gameover = document.querySelector('.gameover');
        const select3 = document.querySelector('.select3');
        const select4 = document.querySelector('.select4');
        const mario = document.querySelector('.mario');
        const pipe = document.querySelector('.pipe');

        document.addEventListener('keydown', (event) => {
            const acceptedMoves = {
                ArrowUp(){   
                    select4.style.display = 'none';
                    select3.style.display = 'block';
                },
                ArrowDown(){   
                    select3.style.display = 'none';
                    select4.style.display = 'block';
                },
                Enter(){
                    pipe.attributeStyleMap.clear()
                    mario.attributeStyleMap.clear()
                    mario.src = './images/mario.gif';
                    mario.classList.remove('death');
                    pipe.classList.remove('start');
                        if(select3.style.display=='block'){
                            gameflag = "true";
                            gameplay();
                            pauseSoundOVer();
                        }
                        if(select4.style.display=='block'){
                            startflag = "true";
                            gameover.style.display = 'none';
                            gamestart.style.display = 'block';                           
                            pauseSoundOVer();
                        }
                }
            }
            const keyPressed = event.key;
            const moveFunction = acceptedMoves[keyPressed];
            if(moveFunction){
                moveFunction();
            }
        });
    }
}
var ThemeMarioSong = document.getElementById("myStart"); 

function playSoundStart() { 
    ThemeMarioSong.play(); 
} 

function pauseSoundStart() { 
    ThemeMarioSong.pause();
} 
var ThemeMarioGameOver = document.getElementById("myOver"); 

function playSoundOver() { 
    ThemeMarioGameOver.play(); 
} 

function pauseSoundOVer() { 
    ThemeMarioGameOver.pause(); 
} 