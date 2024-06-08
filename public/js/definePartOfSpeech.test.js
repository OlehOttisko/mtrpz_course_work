import { definePartOfSpeech } from './definePartOfSpeech.js';
import assert from 'assert';

const runTests = () => {
    try {
        assert.strictEqual(definePartOfSpeech('123'), 'numerator', 'Test failed: "123" should be a numerator');

        assert.strictEqual(definePartOfSpeech('в'), 'preposition', 'Test failed: "в" should be a preposition');
        assert.strictEqual(definePartOfSpeech('обабіч'), 'preposition', 'Test failed: "обабіч" should be a preposition');

        assert.strictEqual(definePartOfSpeech('я'), 'pronoun', 'Test failed: "я" should be a pronoun');
        assert.strictEqual(definePartOfSpeech('мене'), 'pronoun', 'Test failed: "мене" should be a pronoun');

        assert.strictEqual(definePartOfSpeech('бігти'), 'verb', 'Test failed: "бігти" should be a verb');
        assert.strictEqual(definePartOfSpeech('працювати'), 'verb', 'Test failed: "працювати" should be a verb');

        assert.strictEqual(definePartOfSpeech('казна-як'), 'adverb', 'Test failed: "казна-як" should be an adverb');
        assert.strictEqual(definePartOfSpeech('найкраще'), 'adverb', 'Test failed: "найкраще" should be an adverb');

        assert.strictEqual(definePartOfSpeech('не'), 'particle', 'Test failed: "не" should be a particle');
        assert.strictEqual(definePartOfSpeech('ще'), 'particle', 'Test failed: "ще" should be a particle');

        assert.strictEqual(definePartOfSpeech('і'), 'conjunctive', 'Test failed: "і" should be a conjunctive');
        assert.strictEqual(definePartOfSpeech('або'), 'conjunctive', 'Test failed: "або" should be a conjunctive');

        assert.strictEqual(definePartOfSpeech('другий'), 'numerator', 'Test failed: "другий" should be a numerator');
        assert.strictEqual(definePartOfSpeech('десять'), 'numerator', 'Test failed: "десять" should be a numerator');

        assert.strictEqual(definePartOfSpeech('великий'), 'adjective', 'Test failed: "великий" should be an adjective');
        assert.strictEqual(definePartOfSpeech('гарний'), 'adjective', 'Test failed: "гарний" should be an adjective');

        assert.strictEqual(definePartOfSpeech('дівчисько'), 'noun', 'Test failed: "дівчисько" should be a noun');
        assert.strictEqual(definePartOfSpeech('піч'), 'noun', 'Test failed: "піч" should be a noun');

        assert.strictEqual(definePartOfSpeech('їукирзш'), 'undefined', 'Test failed: "неопределенноеСлово" should be undefined');

        console.log('All tests passed!');
    } catch (error) {
        console.error(error.message);
    }
}

runTests();