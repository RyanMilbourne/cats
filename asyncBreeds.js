const fs = require('fs');


const breedDetailsFromFile = function(breed, complete) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    if (!error) {
      console.log("In readFile's Callback: it has the data.");
      complete(data); // => data passed into callback function (complete)
    } else {
      console.log("No data found"); // => Message if no data is found
    }
  });
};

const printOutCatBreed = breed => {
  console.log(`Information on the,`, breed) // => print out the corresponding details based on file type with correct "breed" title
};

// breedDetailsFromFile('Bombay', printOutCatBreed);
breedDetailsFromFile('Balinese', printOutCatBreed); // test 2

