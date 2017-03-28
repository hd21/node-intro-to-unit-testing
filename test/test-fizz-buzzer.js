const should = require('chai').should();
const fizzBuzzerTest = require('../fizzBuzzer');

describe('fizzBuzzerTest', function() {

    it('should return number', function() {
        const normalCases = [
            { num: 15, expected: 'fizz-buzz' },
            { num: 5, expected: 'buzz' },
            { num: 3, expected: 'fizz' },
            { num: 7, expected: 7 }
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzerTest(input.num);
            answer.should.equal(input.expected);
        });
    });
    it('should have error if input is non-numeric', function() {
        const badCases = [
            ['a', 1]
            ['2', 2]
        ];
        badCases.forEach(function(input) {
            (function() {
                fizzBuzzerTest(input[0], input[1])
            }).should.throw(Error);
        });
    });
});