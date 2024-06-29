import { definePartOfSpeech } from './definePartOfSpeech.js';
import assert from 'assert';

const runTests = () => {
    try {
        // Numerals
        assert.strictEqual(definePartOfSpeech('123'), 'numerator', 'Test failed: "123" should be a numerator');
        assert.strictEqual(definePartOfSpeech('два'), 'numerator', 'Test failed: "два" should be a numerator');
        assert.strictEqual(definePartOfSpeech('тисяча'), 'numerator', 'Test failed: "тисяча" should be a numerator');
        assert.strictEqual(definePartOfSpeech('тридцять'), 'numerator', 'Test failed: "тридцять" should be a numerator');

        // Prepositions
        assert.strictEqual(definePartOfSpeech('в'), 'preposition', 'Test failed: "в" should be a preposition');
        assert.strictEqual(definePartOfSpeech('обабіч'), 'preposition', 'Test failed: "обабіч" should be a preposition');
        assert.strictEqual(definePartOfSpeech('з'), 'preposition', 'Test failed: "з" should be a preposition');
        assert.strictEqual(definePartOfSpeech('до'), 'preposition', 'Test failed: "до" should be a preposition');

        // Pronouns
        assert.strictEqual(definePartOfSpeech('я'), 'pronoun', 'Test failed: "я" should be a pronoun');
        assert.strictEqual(definePartOfSpeech('мене'), 'pronoun', 'Test failed: "мене" should be a pronoun');
        assert.strictEqual(definePartOfSpeech('ти'), 'pronoun', 'Test failed: "ти" should be a pronoun');
        assert.strictEqual(definePartOfSpeech('вона'), 'pronoun', 'Test failed: "вона" should be a pronoun');

        // Verbs
        assert.strictEqual(definePartOfSpeech('бігти'), 'verb', 'Test failed: "бігти" should be a verb');
        assert.strictEqual(definePartOfSpeech('працювати'), 'verb', 'Test failed: "працювати" should be a verb');
        assert.strictEqual(definePartOfSpeech('писати'), 'verb', 'Test failed: "писати" should be a verb');
        assert.strictEqual(definePartOfSpeech('читати'), 'verb', 'Test failed: "читати" should be a verb');

        // Adverbs
        assert.strictEqual(definePartOfSpeech('казна-як'), 'adverb', 'Test failed: "казна-як" should be an adverb');
        assert.strictEqual(definePartOfSpeech('найкраще'), 'adverb', 'Test failed: "найкраще" should be an adverb');
        assert.strictEqual(definePartOfSpeech('швидко'), 'adverb', 'Test failed: "швидко" should be an adverb');
        assert.strictEqual(definePartOfSpeech('добре'), 'adverb', 'Test failed: "добре" should be an adverb');

        // Particles
        assert.strictEqual(definePartOfSpeech('не'), 'particle', 'Test failed: "не" should be a particle');
        assert.strictEqual(definePartOfSpeech('ще'), 'particle', 'Test failed: "ще" should be a particle');
        assert.strictEqual(definePartOfSpeech('би'), 'particle', 'Test failed: "би" should be a particle');
        assert.strictEqual(definePartOfSpeech('ж'), 'particle', 'Test failed: "ж" should be a particle');

        // Conjunctives
        assert.strictEqual(definePartOfSpeech('і'), 'conjunctive', 'Test failed: "і" should be a conjunctive');
        assert.strictEqual(definePartOfSpeech('або'), 'conjunctive', 'Test failed: "або" should be a conjunctive');
        assert.strictEqual(definePartOfSpeech('але'), 'conjunctive', 'Test failed: "але" should be a conjunctive');
        assert.strictEqual(definePartOfSpeech('бо'), 'conjunctive', 'Test failed: "бо" should be a conjunctive');

        // Numerals
        assert.strictEqual(definePartOfSpeech('другий'), 'numerator', 'Test failed: "другий" should be a numerator');
        assert.strictEqual(definePartOfSpeech('десять'), 'numerator', 'Test failed: "десять" should be a numerator');
        assert.strictEqual(definePartOfSpeech('п’ятнадцять'), 'numerator', 'Test failed: "п’ятнадцять" should be a numerator');
        assert.strictEqual(definePartOfSpeech('сто'), 'numerator', 'Test failed: "сто" should be a numerator');

        // Adjectives
        assert.strictEqual(definePartOfSpeech('великий'), 'adjective', 'Test failed: "великий" should be an adjective');
        assert.strictEqual(definePartOfSpeech('гарний'), 'adjective', 'Test failed: "гарний" should be an adjective');
        assert.strictEqual(definePartOfSpeech('синій'), 'adjective', 'Test failed: "синій" should be an adjective');
        assert.strictEqual(definePartOfSpeech('новий'), 'adjective', 'Test failed: "новий" should be an adjective');

        // Nouns
        assert.strictEqual(definePartOfSpeech('дівчисько'), 'noun', 'Test failed: "дівчисько" should be a noun');
        assert.strictEqual(definePartOfSpeech('піч'), 'noun', 'Test failed: "піч" should be a noun');
        assert.strictEqual(definePartOfSpeech('книга'), 'noun', 'Test failed: "книга" should be a noun');
        assert.strictEqual(definePartOfSpeech('стіл'), 'noun', 'Test failed: "стіл" should be a noun');

        // Undefined
        assert.strictEqual(definePartOfSpeech('їукирзш'), 'undefined', 'Test failed: "їукирзш" should be undefined');
        assert.strictEqual(definePartOfSpeech('asdfghjkl'), 'undefined', 'Test failed: "asdfghjkl" should be undefined');
        assert.strictEqual(definePartOfSpeech('1234567890'), 'undefined', 'Test failed: "1234567890" should be undefined');

        console.log('All tests passed!');
    } catch (error) {
        console.error(error.message);
    }
}

runTests();
