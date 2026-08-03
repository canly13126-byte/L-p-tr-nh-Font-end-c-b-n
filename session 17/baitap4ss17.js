const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', function() {
        const color = window.getComputedStyle(box).backgroundColor;
        document.body.style.backgroundColor = color;
    });
});