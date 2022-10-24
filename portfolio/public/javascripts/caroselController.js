

const nextButton = document.querySelector('#next');
const allImages = document.querySelector('#allImages');
const lastButton = document.querySelector('#last');
const dots = document.querySelectorAll('.dot');
var x = 0 ; 
let y = 0;

const cycleRight = function () {
    if (x === 200) {
    x = 0;
   }
   else {
    x += 100;
   }
   allImages.style = `transform: translateX(-${x}%)`;
   
};


const cycleLeft = function () {
    if (x === 0) {
    x = 200;
   }
   else {
    x -= 100;
   }
   allImages.style = `transform: translateX(-${x}%)`;
}


const jumpTo = function () {
    allImages.style = `transform: translateX(-${this.value}%)`;
}


nextButton.addEventListener('click', cycleRight);
lastButton.addEventListener('click', cycleLeft);

for (let dot of dots) {
    dot.addEventListener('click', jumpTo);
    dot.value = y;
    y += 100;
}

setInterval(cycleRight, 8000);
