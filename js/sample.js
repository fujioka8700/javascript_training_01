const div = document.querySelector(`.rotate`);
const rotate = div.animate(
    [{
            transform: 'rotate(0deg)'
        },
        {
            transform: 'rotate(360deg)'
        }
    ], {
        duration: 1000,
        easing: 'ease',
        iterations: Infinity
    }
);
rotate.cancel();

div.addEventListener('mouseover', function() {
    rotate.play();
});

div.addEventListener('mouseout', function() {
    rotate.pause();
    rotate.currentTime = 0;
});