const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  url = url + breedName;
  request(url, (error, response, body) => {
    if (body.length === 2) {
      callback(error, error);
    } else {
      const data = JSON.parse(body);
      let description = data[0].description;
      callback(error, description);
    }
  });
};


module.exports = { fetchBreedDescription };

