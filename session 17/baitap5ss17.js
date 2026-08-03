const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === 'huanrose@gmail.com' && passwordInput === '123456') {
        alert('Đăng nhập thành công');
    } else {
        alert('Đăng nhập thất bại');
    }
});