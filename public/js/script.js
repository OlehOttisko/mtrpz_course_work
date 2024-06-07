import { definePartOfSpeech } from './definePartOfSpeech.js';

(()=>{
    'use strict';

    //function for outputing words into output field and console; assign classes to words
    const outputWord = (word) => (myClass) => {
            console.log(`word "${word}" is ${myClass}`);
            outputField.innerHTML += `<span class=${myClass}>${word} </span>`
    };

    button.addEventListener('click', function() {
        const text = inputField.value;
        outputField.innerHTML = '';
        const sentences = text.split(separators).filter(Boolean);
        const wordArrays = sentences.map(sentence => sentence.split(' '));

        wordArrays.forEach(words => {
            words.forEach(word => {
                const partOfSpeech = definePartOfSpeech(word);
                outputWord(word)(partOfSpeech);
            });
        });
    });

    //function which activates the function above, when the key "enter" is pressed
    inputField.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
          button.click();
        }
    });

    //changing page theme
    select.addEventListener('change', function() {
        if (this.value === 'dark') {
          contents.forEach(element => {
            element.classList.add('dark-mode');
          });
        } else {
          contents.forEach(element => {
            element.classList.remove('dark-mode');
          });
        }
    });
})()