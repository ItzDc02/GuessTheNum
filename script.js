'use strict';

let secNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (_score) {
    document.querySelector('.score').textContent = _score;
}

const displayNum = function (_num) {
    document.querySelector('.number').textContent = _num;
}

const calcSecnum = function (_secnum) {
    _secnum = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // Check if the input is not a number (excluding 0 as a valid input)
    if (!guess) {
        displayMessage('Not A Valid Input');
    }
    // When player wins
    else if (guess === secNum) {
        displayMessage('Congratulations!!');
        displayNum(secNum);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    // When player's input is wrong 
    else if (guess !== secNum) {
        if (score > 1) {
            displayMessage(guess > secNum ? 'Lower!!' : 'Higher!!');
            score--;
            displayScore(score);
        } else {
            displayMessage('Game Over!!');
            displayScore(0);
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    calcSecnum(secNum);
    displayMessage('Start guessing...');
    displayScore(score);
    displayNum('?')
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})
