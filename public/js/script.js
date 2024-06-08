import { definePartOfSpeech } from './definePartOfSpeech.js';
import { separators } from './data.js';

(()=>{
    'use strict';

    //capturing page content
    const button = document.querySelector('#analyze');
    const inputField = document.querySelector('#text');
    const outputField = document.querySelector('#output');
    const select = document.querySelector('#mode');
    const dropField = document.querySelector('#drop-zone');
    const contents = document.querySelectorAll('.content');

    //function for outputing words into output field and console; assign classes to words
    const outputWord = (word) => (myClass) => {
        console.log(`word "${word}" is ${myClass}`);
        outputField.innerHTML += `<span class=${myClass}>${word} </span>`
    };

    const analyzeText = (text) =>{
      	outputField.innerHTML = '';
      	const sentences = text.split(separators).filter(Boolean);
      	const wordArrays = sentences.map(sentence => sentence.split(' '));

     	 wordArrays.forEach(words => {
        	words.forEach(word => {
            	const partOfSpeech = definePartOfSpeech(word);
            	outputWord(word)(partOfSpeech);
        	});
      	});
    };

    button.addEventListener('click', function() {
        analyzeText(inputField.value);
    });

    //function which activates the function above, when the key "enter" is pressed
    inputField.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
          	button.click();
      }
  	});

	dropField.addEventListener('dragover', function(event) {
        event.preventDefault();
        dropField.style.borderColor = 'blue';
    });

    dropField.addEventListener('dragleave', function() {
        dropField.style.borderColor = '#ccc';
    });

    dropField.addEventListener('drop', function(event) {
        event.preventDefault();
        dropField.style.borderColor = '#ccc';
        const file = event.dataTransfer.files[0];
        if (file && file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = function(e) {
                inputField.value = e.target.result;
                analyzeText(inputField.value);
            };
            reader.readAsText(file);
        } else {
            alert('Please drop a .txt file');
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