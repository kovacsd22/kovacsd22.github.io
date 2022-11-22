const xWings = [];

// const audio = new Audio('./assets/Star Wars Jedi Theme (320 kbps).mp3');
// audio.play();

let createInterval;
let moveInterval;
console.log(window.innerWidth);

const startX = window.width;
const startY = window.innerHeight + 300;

const targetX = window.width * 0.8;
const targetY = window.innerHeight * 0.2;



function xWingHorde(event) {
    const xWing = document.createElement('img');
    xWing.classList.add('x-wing');
    xWing.src = './assets/x-wing.png';
    document.body.appendChild(xWing);
    // xWing.style.position = 'absolute';

    // console.log('asdasd');
    // xWing.style.top = startY + 'px';
    // xWing.style.left = startX * Math.random + 'px';
    // xWing.style.width = '150px';
    // xWing.style.height = 'auto';

    // xWing.style.top = startY + 'px';
    // xWing.style.left = '-200px';
    // xWing.style.width = '150px';
    // xWing.style.height = 'auto';

    xWing.setAttribute('draghable', false);

    xWing.style.filter += `brightness(${Math.random() + 0.2})`;

    xWings.push(xWing);
}


function moveAll() {
    for (let xWing of xWings) {
        xWing.classList.add('translate');
    }
}

(function start() {
    createInterval = setInterval(xWingHorde, 800);
    moveInterval = setInterval(moveAll, 11);
})()




var boxOne = document.querySelector('.box');

document.querySelector('.animation').onclick = function() {
//   if(this.innerHTML === 'Play') 
//   { 
//     this.innerHTML = 'Pause';
    boxOne.classList.add('horizTranslate');
//   } else {
//     this.innerHTML = 'Play';
//     var computedStyle = window.getComputedStyle(boxOne),
//         marginLeft = computedStyle.getPropertyValue('margin-left');
//     boxOne.style.marginLeft = marginLeft;
//     boxOne.classList.remove('horizTranslate');    
//   }  
}