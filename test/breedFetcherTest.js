// breedFetcherTest.js
const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      console.log(desc);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, desc);
      done();
    });
  }).timeout(5000);
  it('invalid/non-existent breed is passed in.', (done) => {
    fetchBreedDescription('', (err, desc) => {
      assert.equal(err, null);
      console.log(desc);
      const expectedDesc = null;
      assert.equal(expectedDesc, desc);
      done();
    });
  }).timeout(5000);
});

