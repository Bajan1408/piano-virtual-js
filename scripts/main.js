const pianoKeys = document.querySelectorAll('.piano-keys .keys');

let audio = new Audio('tunes');

const playTune = (key) => {}

for(let key of pianoKeys) {
    console.log(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key));
}