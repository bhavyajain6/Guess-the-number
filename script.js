'use strict';
let randomNumber = Math.floor(Math.random()*20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const userInput = document.querySelector('.guess').value;
    if(userInput == randomNumber){
        document.querySelector('.message').textContent = 'Correct Answer!';
        highScore = score;
        document.querySelector('.number').textContent = userInput;
        document.body.style.backgroundColor = "green";
        document.querySelector('.highscore').textContent = highScore;
    }else if(userInput > randomNumber){
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent = score;
    }else if(userInput < randomNumber){
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    randomNumber = Math.floor(Math.random()*20 + 1);
    document.querySelector('.message').textContent = 'Start Guessing!'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    
})