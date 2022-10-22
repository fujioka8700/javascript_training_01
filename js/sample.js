function Foo(name) {
    this.name = name;
}

Foo.prototype.hello = function () {
    console.log(`Hello, I'm ${this.name}.`);
};

const foo = new Foo('John');

function Bar(name) {
    console.log(this)
    Foo.call(this, name);
}

Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.constructor = Bar;
console.log(Bar.prototype.constructor)

Bar.prototype.goodbye = function() {
    console.log('Goodbye!')
}

const bar = new Bar('Paul');
bar.hello();
bar.goodbye();

// console.log(Foo.prototype)
// console.log(Foo.prototype.__proto__)