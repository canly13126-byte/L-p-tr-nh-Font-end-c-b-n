const registerForm = document.getElementById('registerForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!email || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin, không được bỏ trống!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không trùng khớp!");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const isEmailExist = users.some(user => user.email === email);
    if (isEmailExist) {
        alert("Email này đã được đăng ký! Vui lòng dùng email khác.");
        return;
    }

    const newUser = {
        email: email,
        password: password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Đăng ký tài khoản thành công!");
    registerForm.reset();
});