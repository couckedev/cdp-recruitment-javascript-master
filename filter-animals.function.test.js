const filterAnimalsFn = require('./filter-animals.function');
const { data: countries } = require('./data');

const countriesWithPeopleWithoutAnimals = [
    { 
        name: 'France',
        people: [
            { name: 'Rose', animals: [] }
        ]
    }
];
const countriesWithoutPeople = [
    { 
        name: 'France',
        people: []
    }
];

test("should return only 'John Dory' if filter is 'dory'", () => {
    expect(filterAnimalsFn('dory', countries)).toStrictEqual([
        {
            name: 'Uzuzozne',
            people: [
              { name: 'Lillie Abbott', animals: [ { name: 'John Dory' } ] }
            ]
        }
    ]);
});

test("should return [] if filter doesn't matches any animal", () => {
    expect(filterAnimalsFn('not found', countries)).toStrictEqual([]);
})

test("should return [] if countries doesn't have people", () => {
    expect(filterAnimalsFn('dory', countriesWithoutPeople)).toStrictEqual([]);
})

test("should return [] if countries have people without animals", () => {
    expect(filterAnimalsFn('dory', countriesWithPeopleWithoutAnimals)).toStrictEqual([]);
})