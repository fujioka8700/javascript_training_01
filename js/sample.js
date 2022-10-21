const element = document.querySelector('.square');

element.addEventListener('mouseover', function(event) {
    this.classList.toggle('radius');
});

element.addEventListener('mouseleave', function(event) {
    this.classList.toggle('radius');
});

element.addEventListener('click', event => {
    console.log(this)
});