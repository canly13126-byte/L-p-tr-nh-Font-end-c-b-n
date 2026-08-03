let soLuongPhanTu = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
let mangSoNguyen = [];

for (let i = 0; i < soLuongPhanTu; i++) {
    mangSoNguyen.push(Math.floor(Math.random() * 100) + 1);
}

let tongLe = 0;
let tongChan = 0;

for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] % 2 !== 0) {
        tongLe += mangSoNguyen[i];
    } else {
        tongChan += mangSoNguyen[i];
    }
}

alert("Mảng hiện tại: " + mangSoNguyen.join(", "));
alert("Tổng các số lẻ là: " + tongLe);
alert("Tổng các số chẵn là: " + tongChan);