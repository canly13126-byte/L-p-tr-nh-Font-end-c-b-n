const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const rememberMeCheckbox = document.getElementById('rememberMe');

togglePassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = 'Ẩn';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = 'Hiện';
    }
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin, không được bỏ trống!");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userFound = users.find(user => user.email === email && user.password === password);

    if (!userFound) {
        alert("Email hoặc mật khẩu không chính xác!");
        return;
    }

    if (rememberMeCheckbox.checked) {
        const expireTime = Date.now() + 24 * 60 * 60 * 1000; 
        const sessionData = {
            user: userFound.email,
            expires: expireTime
        };
        localStorage.setItem('loginSession', JSON.stringify(sessionData));
    } else {
        localStorage.removeItem('loginSession');
    }

    alert("Đăng nhập thành công!");
    window.location.href = "baitap2ss19.html";
});