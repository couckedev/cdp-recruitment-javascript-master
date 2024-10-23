function searchAnimal(filter, animals) {
    // I prefer use regex.test but we could also use simple animal.name.toLowerCase().includes(filter.value)
    const regex = new RegExp(filter.value, 'i');
    return animals.filter(animal => regex.test(animal.name));
}

module.exports = searchAnimal;