"use strict";
campoMinato()
function campoMinato() {
    const btn = document.querySelector('button');
    const numBomb = 1;
    let bombs;
    let gameover;
    let score;
    btn.addEventListener('click', function() {
        gameover =false;
        score= 0;
    const numSquare = parseInt(document.getElementById('difficultSele').value);

    bombs = bombsMaker(numSquare)
        
        const playground = document.querySelector('.playground');
        playground.innerHTML=''
        
    
        for(let i = 0 ; i < numSquare ; i++){
            const square = createSquare(i+1 , numSquare);
            
            playground.append(square) ;
        }
    
        
    });
    
    // UTILITY LIBRARY
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    

    function createSquare(content , rowSquare){
        const squareWidth = Math.sqrt(rowSquare);
        const square = document.createElement('div');
    
        square.classList.add('square');
        square.style.width = `calc(100% /  ${squareWidth} )`
        square.style.height = `calc(100% /  ${squareWidth} )`
        square.innerHTML = content;
        
        square.addEventListener('click' , () => {
             let allSquare = document.getElementsByClassName('square');
            if (bombs.includes(parseInt(square.textContent))) { 
            gameover = true

             allSquare = document.getElementsByClassName('square');
            const loseorwin =document.querySelector('.loseScreen')
            for (let i = 0; i < bombs.length; i++) {
                
                allSquare[bombs[i] -1].classList.add('bomb')
                allSquare[bombs[i] -1].innerHTML= `<i class="fa-solid fa-bomb fa-bounce ombra-icon"></i>`
                bombSound()
                loseorwin.classList.remove('d-none'); 
            } 
            
             } else{
                square.classList.add('active');
                score++;
                if (allSquare.length - numBomb === score) {
                    Win()
                }
                
                // vicorySound()
                // loseorwin.classList.remove('d-none'); 
            }
            console.log(content);
        }, {once : true});
        return square;
    } 


       


    function bombsMaker(numSquare) {
        const bombsarray =[];
        while (bombsarray.length < numBomb) {
            let bomb =getRndInteger(1, numSquare);
             
             if (!bombsarray.includes(bomb)){
                 bombsarray.push(bomb)
             }
             console.log(bombsarray);
            
        }
            return bombsarray
    }
    
  
    function Win() {
        // gameover = false
        console.log('hai vinto');
        vicorySound() 
              
        }
    

    function bombSound() {
                    let audio = new Audio("../sounds/nuclear-bomb-exploding-close-tomas-herudek-1-00-08.mp3");
                        audio.play();
                        audio.volume = 0.1;
    }

    function vicorySound() {
        let audio = new Audio("../sounds/level-complete-retro-video-game-music-soundroll-variation-3-3-00-05.mp3");
            audio.play();
            audio.volume = 1;
    }

}   


// creo container con opaciti bassa 
// con bottone che resetta tutto 
// cosi evityo di toccare altre 