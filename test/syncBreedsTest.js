const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

// TESTS:

describe("#breedDetails", () => {
  it('returns breed details for the Bombay breed', () => {
    const bombay = breedDetails("Bombay");
    const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    assert.equal(expectedDesc, bombay);
    // console.log(bombay); //=> prints out the description for that breed
    // console.log(breedDetails);
  });

  it('returns nothing when no breedname is given', () => {
    const expected = undefined;
    const noName = breedDetails('');
    assert.equal(noName, expected);
  });
});

