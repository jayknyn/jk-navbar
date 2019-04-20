const fs = require('fs');
const path = require('path');
const os = require('os');

// output file in the same folder
const filename = path.join(__dirname, 'output-test.csv');
const output = [['state', 'capital', 'population']]; // holds all rows of data

// example JSON data
const data = [
  {
    state: 'Maryland',
    capital: 'Annapolis',
    population: 38394
  },
  {
    state: 'New York',
    capital: 'Albany',
    population: 97856
  },
  {
    state: 'New Mexico',
    capital: 'Santa Fe',
    population: 75764
  },
];

data.forEach((d) => {
  const row = []; // a new array for each row of data
  row.push(d.state);
  row.push(d.capital);
  row.push(d.population);

  output.push(row.join()); // by default, join() uses a ','
});

fs.writeFileSync(filename, output.join(os.EOL), (err, success) => {
  if (err) {
    console.log('write file error')
  } else {
    console.log('write file success')
  }
});

// mongoimport -d mydb -c things --type csv --file db/output.csv --headerline