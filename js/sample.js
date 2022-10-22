const data = {
    firstName: 'David',
    lastName: 'Bowie',
    email: 'starman@gmail.com'
}

const {
    firstName,
    email
} = data;
console.log(firstName);
console.log(email); // -> 'starman@gmail.com'

const obj = {
    a: 123,
    b: 456
};

const {
    a: num
} = obj;
console.log(num) // -> 123