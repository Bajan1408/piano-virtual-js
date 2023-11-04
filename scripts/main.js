const pianoKeys = document.querySelectorAll('.piano-keys .keys');
const volumeSlider = document.querySelector('.volume-slider input');
const showKeys = document.querySelector('.show-keys-letter input');

const mapedKeys = [];
let audio = new Audio('./src/tunes/a.wav');

const handleVolume = (e) => {
    console.log(e.target.value);
    audio.volume = e.target.value;
} 

volumeSlider.addEventListener('input', handleVolume);

for(let keyP of pianoKeys) {
    keyP.addEventListener('click', () => playTune(keyP.dataset.key));
   // console.log(keyP.dataset.key);
    mapedKeys.push(keyP.dataset.key);
} 

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play(key);

    const pressedKey = document.querySelector(`[data-key="${key}"]`);
    console.log(pressedKey.dataset);
    pressedKey.classList.add('active');
    setTimeout(() => {
        pressedKey.classList.remove('active');
    }, 150)
}

document.addEventListener('keydown', (e) => {
    if(mapedKeys.includes(e.key)) {
        playTune(e.key);
    } 
});

const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle('hide');
    })
}

showKeys.addEventListener('click', showHideKeys);