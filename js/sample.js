class Human2 {
    speak() {
        console.log('こんにちは');
    }
}

class Girl2 extends Human2 {
    speak() {
        console.log('こんにちは！Girlオブジェクト！');
    }
}

const obj2 = new Girl2();
obj2.speak()
console.log(obj2)

/////////////////////////////////////

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
console.log(obj)