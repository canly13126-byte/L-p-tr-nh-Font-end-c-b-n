const textElement = document.getElementById('text');
const btnHide = document.getElementById('btn-hide');
const btnShow = document.getElementById('btn-show');

btnHide.addEventListener('click', function() {
    textElement.style.display = 'none';
});

btnShow.addEventListener('click', function() {
    textElement.style.display = 'block';
});