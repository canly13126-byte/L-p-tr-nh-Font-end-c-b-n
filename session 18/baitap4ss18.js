const keys = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', 'Xóa'
];

const keyboardContainer = document.getElementById('keyboard');
const textarea = document.getElementById('output');

keys.forEach(key => {
    const button = document.createElement('button');
    button.textContent = key;
    button.classList.add('key');

    if (key === 'Xóa') {
        button.classList.add('delete');
        button.addEventListener('click', () => {
            textarea.value = textarea.value.slice(0, -1);
        });
    } else {
        button.addEventListener('click', () => {
            textarea.value += key;
        });
    }

    keyboardContainer.appendChild(button);
});