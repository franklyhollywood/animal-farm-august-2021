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
const h1El = document.getElementById('header');

dogImage.addEventListener('click', () => {
	dogSound.play();
	h1El.textContent = 'DOG';
});

catImage.addEventListener('click', () => {
	catSound.play();
	h1El.textContent = 'CAT';
});

horseImage.addEventListener('click', () => {
	horseSound.play();
	h1El.textContent = 'HORSE';
});
