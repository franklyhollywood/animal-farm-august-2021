// import functions and grab DOM elements

// initialize state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const catSound = document.getElementById('catSound');
const catImage = document.getElementById('cat');
const dogSound = document.getElementById('dogSound');
const dogImage = document.getElementById('dog');
const horseSound = document.getElementById('horseSound');
const horseImage = document.getElementById('horse');

dogImage.addEventListener('click', () => {
	dogSound.play();
});

catImage.addEventListener('click', () => {
	catSound.play();
});

horseImage.addEventListener('click', () => {
	horseSound.play();
});
