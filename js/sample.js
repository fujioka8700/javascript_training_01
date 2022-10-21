const one = document.querySelector('#one');
one.addEventListener('click', function (e) {
    console.log('One handler', e.target);
});

const two = document.querySelector('#two');
two.addEventListener('click', function (e) {
    console.log('Two handler', e.target.id);
});

const three = document.querySelector('#three');
three.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('Three handler', e.target.id);
});