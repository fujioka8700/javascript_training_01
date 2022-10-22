class SampleOne {
    constructor(myname, myage) {
        this.name = myname;
        this.age = myage;
    }

    getName() {
        return this.name;
    }
}

SampleOne.prototype.hello = function() {
    return 'Hello';
}

class SampleThirds extends SampleOne {
    constructor(myname, myage) {
        super(myname, myage);

        console.log(this.name);
        console.log(this.age);
    }
    getMyName() {
        return '私の名前は' + super.getName() + 'です';
    }
}

SampleThirds.prototype.hello = function() {
    return 'こんにちは';
}

const obj = new SampleThirds('花子', 30);
console.log(obj.hello())
console.log(obj.getMyName())