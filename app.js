const parseArgsFn = require('./parse-args.function');
const countFn = require('./count.function');
const { data: countries } = require('./data.js'); // I use this { data: countries } to work with coutnries and to avoid 'data' dimension of data.js object
const filterAnimalsFn = require('./filter-animals.function');
const util = require('util');

const args = process.argv.slice(2); //We have to ignore 2 first values of argv (first is node executable path, and second is js script path)
const parsedArgs = parseArgsFn(args);
const filter = parsedArgs.find(arg => arg.name === 'filter'); // here is the filter parameter object
const count = parsedArgs.find(arg => arg.name === 'count') // here is the count parameter object
let filtered = countries; // We set a filtered variable, initialized to 'countries' value

if(filter !== undefined) {
    filtered = filterAnimalsFn(filter.value, countries);
}

if(count !== undefined) {
    filtered = countFn(filtered);
}

// Here I use util.inspect because console.log truncate subobjects
console.log(util.inspect(filtered, false, null, true));