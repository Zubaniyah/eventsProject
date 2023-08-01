function changeColor(color) {
    const colorDisplay = document.getElementById('color-display');
    colorDisplay.style.backgroundColor = color;
}

const aquaButton = document.getElementById('aqua');
const tealButton = document.getElementById('teal');
const pinkButton = document.getElementById('pink');
const purpleButton = document.getElementById('purple');
const colorlessButton = document.getElementById('colorless');


aquaButton.addEventListener('click', function () {
  changeColor('aqua');
});

tealButton.addEventListener('click', function () {
  changeColor('teal');
});

pinkButton.addEventListener('click', function () {
  changeColor('pink');
});

purpleButton.addEventListener('click', function () {
    changeColor('purple');
});

colorlessButton.addEventListener('click', function()  {
    changeColor('white');
});
