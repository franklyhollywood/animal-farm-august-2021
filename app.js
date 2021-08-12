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

function playSoundChangeText(sound, animalName) {
	sound.play();
	h1El.textContent = animalName;

	setTimeout(() => {
		h1El.textContent = 'Welcome to Alchemy Bootstrap!';
	}, 3000);
}

dogImage.addEventListener('click', () => {
	playSoundChangeText(dogSound, 'DOG');
});

catImage.addEventListener('click', () => {
	playSoundChangeText(catSound, 'CAT');
});

horseImage.addEventListener('click', () => {
	playSoundChangeText(horseSound, 'HORSE');
});

//Key strokes:
document.addEventListener('keydown', (event) => {
	if (event.key === 'd') {
		playSoundChangeText(dogSound, 'dog');
	}

	if (event.key === 'c') {
		playSoundChangeText(catSound, 'cat');
	}

	if (event.key === 'h') {
		playSoundChangeText(horseSound, 'horse');
	}
});
