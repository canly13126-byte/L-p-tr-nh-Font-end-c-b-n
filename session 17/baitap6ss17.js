const screen = document.getElementById('screen');
function press(value) {
    screen.value = screen.value + value;
}
document.getElementById('btn-0').addEventListener('click', function() { press('0'); });
document.getElementById('btn-1').addEventListener('click', function() { press('1'); });
document.getElementById('btn-2').addEventListener('click', function() { press('2'); });
document.getElementById('btn-3').addEventListener('click', function() { press('3'); });
document.getElementById('btn-4').addEventListener('click', function() { press('4'); });
document.getElementById('btn-5').addEventListener('click', function() { press('5'); });
document.getElementById('btn-6').addEventListener('click', function() { press('6'); });
document.getElementById('btn-7').addEventListener('click', function() { press('7'); });
document.getElementById('btn-8').addEventListener('click', function() { press('8'); });
document.getElementById('btn-9').addEventListener('click', function() { press('9'); });

document.getElementById('btn-add').addEventListener('click', function() { press('+'); });
document.getElementById('btn-sub').addEventListener('click', function() { press('-'); });
document.getElementById('btn-mul').addEventListener('click', function() { press('*'); });
document.getElementById('btn-div').addEventListener('click', function() { press('/'); });

document.getElementById('btn-clear').addEventListener('click', function() {
    screen.value = '';
});
document.getElementById('btn-equal').addEventListener('click', function() {
    // Kiểm tra lỗi chia cho số 0
    if (screen.value.includes('/0')) {
        alert('Lỗi không thể chia cho 0');
        screen.value = '';
        return;
    }
    try {
        let result = eval(screen.value);
        screen.value = result;
    } catch (error) {
        alert('Phép tính không hợp lệ');
        screen.value = '';
    }
});