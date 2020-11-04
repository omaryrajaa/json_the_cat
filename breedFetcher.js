const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL , (error, response, body) => {
  
    if (error) {
      error += response;
      callback(error, null);
    } else {
      const data = JSON.parse(body);
  
      if (data.length === 0) {
        error = 'The requested breed is not found';
        callback(error, null);
      } else {
        callback(null, data[0]['description']);
      }

    }
  });

};

module.exports = { fetchBreedDescription };