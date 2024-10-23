const parseArgs = require('./parse-args.function');
const { data: countries } = require('./data.js'); // I use this { data: countries } to work with coutnries and to avoid 'data' dimension of data.js object
const searchAnimal = require('./search-animal.function');
const util = require('util');

const args = process.argv.slice(2); //We have to ignore 2 first values of argv (first is node executable path, and second is js script path)
const parsedArgs = parseArgs(args);
const filter = parsedArgs.find(arg => arg.name === 'filter'); // here is the filter parameter object
const count = parsedArgs.find(arg => arg.name === 'count') // here is the count parameter object
let filtered = countries; // We set a filtered variable, initialized to 'countries' value

if(filter !== undefined) {
    /*
        1 - For each people of country, we have to filter, using value of filter
        2 - We need to filter each people array to remove people who doesn't have animals matching filters
        3 - We need to filter countries array to remove country which doesn't have people
        
        NOTE : We could already make global search function with flag to indicate what we want to search, but I prefer this function to bring easy solution
    */
    filtered = filtered.map(country => {
        country.people = country.people.map(p => {
            // animal filtering
            p.animals = searchAnimal(filter, p.animals);
            return p;
        }).filter(p => p.animals.length > 0);
        return country;
    }).filter(country => {
        return country.people.length > 0
    });
}

if(count !== undefined) {
    /*
        1 - Loop on filtered array
        2 - Loop on each people, then transform people name to add animals count
        3 - Transform country name, adding people count
    */
    filtered = filtered.map(country => {
        country.people.map(p => {
            p.name = `${p.name} [${p.animals.length}]`;
            return p;
        });
        country.name = `${country.name} [${country.people.length}]`;
        return country;
    })
}

// Here I use util.inspect because console.log truncate subobjects
console.log(util.inspect(filtered, false, null, true));