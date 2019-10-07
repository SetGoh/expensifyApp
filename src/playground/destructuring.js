//Objet destructuring

const person = {
    name: 'Georg',
    age: 27,
    location: {
        cityy: 'Assis',
        temp: 92
    }
};

const { name: firstName = 'Anonimo', age } = person
console.log(`${firstName} tem ${age}.`);

const { cityy, temp: temperatura } = person.location;
if (cityy && temperatura) {
    console.log(`Está ${temperatura} em ${cityy}`);
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { title, author } = book
const {name: publisherName = 'Self-published'} = book.publisher;
console.log(`${publisherName} e ${author}`);

//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);