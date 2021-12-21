const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('.sounds audio');

window.addEventListener('keydown', makeSound);
window.addEventListener('transitionend', removeTransition);

keys.forEach(key => {
	key.addEventListener('click', (e)=> {
		let keycode = key.getAttribute('data_keycode');
		let audio = document.querySelector(`.sounds audio[data_keycode="${keycode}"`);
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');
	})
})

function removeTransition() {
	keys.forEach(key => {
		key.classList.remove('playing');
	})
}

function makeSound(e) {
	removeTransition();
	keys.forEach(key =>{
		if (key.attributes.data_keycode.value == e.keyCode) {
			let audio = document.querySelector(`.sounds audio[data_keycode="${e.keyCode}"`);
			audio.currentTime = 0;
			audio.play();
			key.classList.add('playing');
		}
	})
}

