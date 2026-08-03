let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let pheptinh = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");

let ketqua;

if (pheptinh == "+") {
    ketqua = a + b;
} else if (pheptinh == "-") {
    ketqua = a - b;
} else if (pheptinh == "*") {
    ketqua = a * b;
} else if (pheptinh == "/") {
    ketqua = a / b;
}

alert("Kết quả của phép tính trên: a " + pheptinh + " b = " + ketqua);