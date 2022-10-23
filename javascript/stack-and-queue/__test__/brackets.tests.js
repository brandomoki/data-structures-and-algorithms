'use strict';

const validateBrackets = require('../brackets');

describe('Validate Brackets', () => {

  it('validates that brackets are balanced', () => {

    let string = 'I am the big bad wolf: (the better to eat you with) ';
    let string2 = 'I am the {big) (bad} wolf: (the better to eat you with) ';
    let string3 = 'I am the {big) (bad wolf: (the better to eat you with) ';

    let test1 = validateBrackets(string);
    let test2 = validateBrackets(string2);
    let test3 = validateBrackets(string3);

    expect(test1).toEqual(true);
    expect(test2).toBe(true);
    expect(test3).toBe(false);
  });

});
