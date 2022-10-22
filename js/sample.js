const objOne = {
    greeting: function (name) {
        return `Hello, ${name}さん`;
    }
};

console.log(objOne.greeting('太郎'));

const objTwo = {
    greeting(name) {
        return `Hello, ${name}くん`;
    }
};

console.log(objTwo.greeting('花子'));

///////////////////////////////

const name = 'John Lennon'

const obj = {
    // name: name,
    name
};

console.log(obj);