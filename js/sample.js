const image = document.getElementById('image');
const cover = document.getElementById('cover');
const coverCheck = document.getElementById('cover-check');

image.addEventListener('mouseenter', () => {
    cover.classList.add('run');
    coverCheck.classList.add('cover-check_run');
});

cover.addEventListener('mouseleave', () => {
    cover.classList.remove('run');
    coverCheck.classList.remove('cover-check_run');
});