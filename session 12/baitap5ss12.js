let nFibo = parseInt(prompt("Bài 1: Nhập số lượng số Fibonacci cần in:"));
let a = 0, b = 1, resultFibo = "";
for (let i = 1; i <= nFibo; i++) {
    resultFibo += a + " ";
    let next = a + b;
    a = b;
    b = next;
}
alert("Dãy Fibonacci là: " + resultFibo);


let nGiaiThua = parseInt(prompt("Bài 2: Nhập số nguyên dương để tính giai thừa:"));
let giaithua = 1;
for (let i = 1; i <= nGiaiThua; i++) {
    giaithua *= i;
}
alert(nGiaiThua + "! = " + giaithua);


console.log("Bài 3: In 4 hình tam giác vuông");
for (let i = 1; i <= 5; i++) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s += "*";
    }
    console.log(s);
}
console.log("--------------------");
for (let i = 5; i >= 1; i--) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s += "*";
    }
    console.log(s);
}
console.log("--------------------");
for (let i = 1; i <= 5; i++) {
    let s = "";
    for (let j = 1; j <= 5 - i; j++) {
        s += " ";
    }
    for (let k = 1; k <= i; k++) {
        s += "*";
    }
    console.log(s);
}
console.log("--------------------");
for (let i = 5; i >= 1; i--) {
    let s = "";
    for (let j = 1; j <= 5 - i; j++) {
        s += " ";
    }
    for (let k = 1; k <= i; k++) {
        s += "*";
    }
    console.log(s);
}
alert("Bài 3: Đã in xong 4 hình tam giác vào Console (F12)!");


console.log("Bài 4: In hình chữ nhật rỗng");
for (let i = 1; i <= 7; i++) {
    let s = "";
    for (let j = 1; j <= 20; j++) {
        if (i === 1 || i === 7 || j === 1 || j === 20) {
            s += "*";
        } else {
            s += " ";
        }
    }
    console.log(s);
}
alert("Bài 4: Đã in xong hình chữ nhật rỗng vào Console (F12)!");


let money = parseFloat(prompt("Bài 5: Nhập số tiền ban đầu (VND):"));
let months = parseInt(prompt("Bài 5: Nhập số tháng cho vay:"));
let rate = parseFloat(prompt("Bài 5: Nhập lãi suất hàng tháng (%):")) / 100;
for (let i = 1; i <= months; i++) {
    money += money * rate;
}
alert("Tổng số tiền nhận được sau " + months + " tháng là: " + money.toFixed(2) + " VND");