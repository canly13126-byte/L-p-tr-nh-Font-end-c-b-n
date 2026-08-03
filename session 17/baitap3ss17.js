const modal = document.getElementById('my-modal');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});