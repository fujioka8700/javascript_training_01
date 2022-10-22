const arr = [1,2,3].map(num => num * 2);
console.log(arr);

const arr2 = [1,2,3].map(function(num){
    return num * 2;
});

console.log(arr2);

setTimeout(() => console.log('ha ha'), 2000);

const func = (a, b) => a + b;
const n = func(10, 20);
console.log(n);

const obj = {
    greeting: name => `Hello, ${name}`
};

console.log(obj.greeting('太郎'));

///////////////////////////////

const someArray = [1, 2, 3];

function someFunc(item) {
    console.log(item);
}

var that = this;
someArray.forEach(function(item) {
    that.someFunc(item);
});

someArray.forEach(item => {
    this.someFunc(item);
});