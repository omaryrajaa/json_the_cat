const request = require('request');
const breadName = process.argv[2];

const URL = `https://api.thecaapi.com/v1/breeds/search?q=${breadName}`;

request(URL , (error, response, body) => {
  
  if (error)   throw error;

  console.log('statusCode:', response && response.statusCode);// Print the response status code if a response was received

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('The requested breed is not found');
  } else {
    console.log(data[0]['description']);
  }

});
