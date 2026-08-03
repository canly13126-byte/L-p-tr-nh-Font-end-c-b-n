function bai1(arr) {
    return arr.reverse().join('');
}

function bai2(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            count++;
        }
    }
    return count;
}

function bai3(str) {
    let words = str.trim().split(/\s+/);
    return (str.trim() === '') ? 0 : words.length;
}

function bai4(str1, str2) {
    if (str1 === str2) {
        return "Hai chuoi giong nhau";
    } else {
        return "Hai chuoi khac nhau";
    }
}

function bai5(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '-') {
            arr[i] = '_';
        }
    }
    return JSON.stringify(arr);
}

function chayBai1() {
    let mang1 = ['c', 's', 'c', '2', '6', '1'];
    document.getElementById('kq1').innerText = "Ket qua: " + bai1(mang1);
}

function chayBai2() {
    let mang2 = ['a', 'b', '2', 'x', '5', '8', 'z'];
    document.getElementById('kq2').innerText = "Ket qua: " + bai2(mang2);
}

function chayBai3() {
    let chuoi = document.getElementById('txtBai3').value;
    document.getElementById('kq3').innerText = "Ket qua: " + bai3(chuoi);
}

function chayBai4() {
    let s1 = document.getElementById('txt1Bai4').value;
    let s2 = document.getElementById('txt2Bai4').value;
    document.getElementById('kq4').innerText = "Ket qua: " + bai4(s1, s2);
}

function chayBai5() {
    let mang5 = ['a', '-', 'b', '-', 'c'];
    document.getElementById('kq5').innerText = "Ket qua: " + bai5(mang5);
}

