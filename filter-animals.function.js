function filterAnimals(filter, countries) {    
    /*
        1 - For each people of country, we have to filter, using value of filter
        2 - We need to filter each people array to remove people who doesn't have animals matching filters
        3 - We need to filter countries array to remove country which doesn't have people
        
        NOTE : We could already make global search function with flag to indicate what we want to search, but I prefer this function to bring easy solution
    */
    return countries.map(country => {
        if(country.people) {
            country.people = country.people.map(p => {
                if(p.animals) {
                    // animal filtering
                    p.animals = p.animals.filter(animal => {                    
                        // I prefer use regex.test but we could also use simple animal.name.toLowerCase().includes(filter.value)
                        const regex = new RegExp(filter, 'i');
                        return regex.test(animal.name);
                    });
                    return p;
                }
            }).filter(p => p?.animals.length > 0);
        }
        return country;
    }).filter(country => {
        return country?.people.length > 0
    });
}

module.exports = filterAnimals;