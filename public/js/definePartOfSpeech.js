'use strict';

//function for comparing words with arrays
const condition = (partOfSpeech) => (word) => (compareWith) => { 
    const cleanWord = word.replace(/^[^\wА-Яа-яіІїЇєЄ]+|[^\wА-Яа-яіІїЇєЄ]+$/g, '').toLowerCase();//clearing words from dots, comas etc. 
    let truly = null;
    //comparing words with arrays
    switch (compareWith) {
        case 'ending':
            if(partOfSpeech.some(element => cleanWord.endsWith(element) && (element.length < cleanWord.length))){
                truly = true;
            };
            break;
        case 'whole':
            if(partOfSpeech.includes(cleanWord)){
                truly = true;
            };
            break;
        case 'prefix':
            if(partOfSpeech.some(element => cleanWord.startsWith(element) && (element.length < cleanWord.length))){
                truly = true;
            };
            break;
    };
    return truly;
};

//defining a part of speech of word
export const definePartOfSpeech = (word) => {
    let POS = null;
    switch (true) {
        case !isNaN(parseFloat(word)):
            POS = 'numerator';
            break;
        case condition (prepositions)(word)('whole'):
            POS = 'preposition';
            break;
        case condition (pronouns)(word)('whole'):
            POS = 'pronoun';
            break;
        case condition (verbs)(word)('whole'):
            POS = 'verb';
            break;
        case condition (adverbs)(word)('whole'):
            POS = 'adverb';
            break;
        case condition (particles)(word)('whole'):
            POS = 'particle';
            break;
        case condition (conjunctives)(word)('whole'):
            POS = 'conjunctive';
            break;
        case condition (numerators)(word)('whole'):
            POS = 'numerator';
            break;
        case condition (adverbsPref)(word)('prefix'):
            POS = 'adverb';
            break;
        case condition (numeratorsPref)(word)('prefix'):
            POS = 'numerator';
            break;
        case condition (pronounsPref)(word)('prefix'):
            POS = 'pronoun';
            break;
        case condition (adjectivesEnds)(word)('ending'):
            POS = 'adjective';
            break;
        case condition (prepositionsEnds)(word)('ending'):
            POS = 'preposition';
            break;
        case condition (pronounsEnds)(word)('ending'):
            POS = 'pronoun';
            break;        
        case condition (numeratorsEnds)(word)('ending'):
            POS = 'numerator';
            break;
        case condition (adverbsEnds)(word)('ending'):
            POS = 'adverb';
            break;
        case condition (verbsEnds)(word)('ending'):
            POS = 'verb';
            break;
        case condition (nounsEnds)(word)('ending'):
            POS = 'noun';
            break;
        default:
            POS = 'undefined';
            break;
    }
    return POS;
};