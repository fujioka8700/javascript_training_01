var Human = function(name) {
    this.name = name;
};

Human.prototype.confirm = function() {
    console.log(this.name + 'は人間です');
};

var Nobita = function(name) {
    Human.call(this, name);
};

Nobita.prototype = Object.create(Human.prototype);

const obj = new Nobita('野比');
obj.confirm()
