const pianoKeys = document.querySelectorAll('.piano-keys .keys');
const volumeSlider = document.querySelector('.volume-slider input');
const showKeys = document.querySelector('.show-keys-letter input');

const mapedKeys = [];
let audio = new Audio('./src/tunes/a.wav');

const handleVolume = (e) => {
    audio.volume = e.target.value;
} 

volumeSlider.addEventListener('input', handleVolume);

for(let keyP of pianoKeys) {
    keyP.addEventListener('click', () => playTune(keyP.dataset.key));
    mapedKeys.push(keyP.dataset.key);
} 

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play(key);

    const pressedKey = document.querySelector(`[data-key="${key}"]`);
    pressedKey.classList.add('active');
    setTimeout(() => {
        pressedKey.classList.remove('active');
    }, 150)
}

document.addEventListener('keydown', (e) => {
      let keypressed = '';
  
        switch(e.key) {
           case 'a': keypressed = 'do';
            break;
           case 'w': keypressed = 'doS';
            break;
           case 's': keypressed = 're';
            break;
           case 'e': keypressed = 'reS';
            break;
           case 'd': keypressed = 'mi';
            break;
           case 'f': keypressed = 'fa';
            break;
           case 't': keypressed = 'faS';
            break;
           case 'g': keypressed = 'sol';
            break;
           case 'y': keypressed = 'solS';
            break;
           case 'h': keypressed = 'la';
            break;
           case 'u': keypressed = 'laS';
            break;
           case 'j': keypressed = 'si';
            break;
           case 'k': keypressed = 'do8';
            break;
           case 'o': keypressed = 'doS8';
            break;
           case 'l': keypressed = 're8';
            break;
           case 'p': keypressed = 'reS8';
            break;
           case 'ç': keypressed = 'mi8';
            break;
        }
        
    
        if(mapedKeys.includes(keypressed)) {
            playTune(keypressed);
        }
});

const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle('hide');
    })
}

showKeys.addEventListener('click', showHideKeys);