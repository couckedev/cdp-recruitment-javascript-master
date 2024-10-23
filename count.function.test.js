const countFn = require('./count.function');

const countries = [    
    { 
        name: 'France',
        people: [
            {
                 name: 'Rose', 
                 animals: [
                    {
                        name: 'Dog'
                    },
                    {
                        name: 'Cat'
                    }
                ] 
            }
        ]
    }
];

test("should return countries with people count in each country name and animals count in each people name", () => {
    expect(countFn(countries)).toStrictEqual([
        { 
            name: 'France [1]',
            people: [
                {
                     name: 'Rose [2]', 
                     animals: [
                        {
                            name: 'Dog'
                        },
                        {
                            name: 'Cat'
                        }
                    ] 
                }
            ]
        }
    ]);
});