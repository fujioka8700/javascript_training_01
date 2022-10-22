var Human = function() {}
Human.prototype.speak = function() {
    console.log('こんにちは');
}

var Girl = function() {}
Girl.prototype = Object.create(Human.prototype);

Girl.prototype.speak = function() {
    console.log('こんにちは！Girlオブジェクト！');
}

const obj = new Girl();
obj.speak()