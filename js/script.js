"use strict";
campoMinato()
function campoMinato() {
    const btn = document.querySelector('button');
    const numBomb = 16;
    let bombs;
    btn.addEventListener('click', function() {
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
            square.classList.add('active');
            if (bombs.includes(content)) {
                alert('sei esploso')
            } else{
                
            }
            console.log(content);
        }); 
        return square;
    } 


    function bombsMaker(numSquare) {
        const bombsarray =[];
        while (bombsarray.length < numBomb) {
            let bomb =getRndInteger(1, numSquare);
            // !bombsarray.includes(bomb)? bombsarray.push(bomb): ;
             
             if (!bombsarray.includes(bomb)){
                 bombsarray.push(bomb)
             }
             console.log(bombsarray);
            
        }
            return bombsarray
    }
    
    
}
