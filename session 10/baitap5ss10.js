let usd = prompt("Nhập số tiền Đô la Mỹ (USD):");
let rate = 25000;
let vnd = Number(usd) * rate;

alert("Số tiền Việt Nam Đồng tương ứng là: " + vnd.toLocaleString() + " đ");