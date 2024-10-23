function count(countries) {    
    /*
        1 - Loop on countries array
        2 - Loop on each people, then transform people name to add animals count
        3 - Transform country name, adding people count
    */
    return countries.map(country => {
        country.people.map(p => {
            p.name = `${p.name} [${p.animals.length}]`;
            return p;
        });
        country.name = `${country.name} [${country.people.length}]`;
        return country;
    })
}

module.exports = count;