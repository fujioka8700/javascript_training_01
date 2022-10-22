function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.hello = function() {
    console.log('hello')
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(Product.__proto__)
console.log(Object.create(Product.prototype))
console.log(new Product())

Food.prototype = Object.create(Product.prototype);
Food.prototype.constructor = Food;

// console.log(new Food('cheese', 5).hello())
new Food('cheese', 5).prototype;
// expected output: "cheese"