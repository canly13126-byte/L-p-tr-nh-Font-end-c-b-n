let chon = +prompt("Mời bạn chọn bài muốn chạy (Từ 1 đến 8):");

if (chon === 1) {
    // --- BÀI 1: Đếm số lớn hơn hoặc bằng 10 ---
    let numbers = [];
    let count = 0;
    for (let i = 0; i < 10; i++) {
        let num = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
        numbers.push(num);
        if (num >= 10) {
            count++;
        }
    }
    document.write("Mảng: " + numbers + "<br>Số lượng số >= 10 là: " + count);

} else if (chon === 2) {
    // --- BÀI 2: Tìm số lớn nhất và vị trí ---
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(+prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    }
    let max = numbers[0];
    let index = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            index = i;
        }
    }
    document.write("Mảng: " + numbers + "<br>Lớn nhất: " + max + " ở vị trí index: " + index);

} else if (chon === 3) {
    // --- BÀI 3: Tìm số lớn nhất và tính trung bình ---
    let n = +prompt("Bạn muốn nhập bao nhiêu số nguyên?");
    let numbers = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let num = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
        numbers.push(num);
        sum += num;
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    document.write("Mảng: " + numbers + "<br>Lớn nhất: " + max + "<br>Trung bình: " + (sum / n));

} else if (chon === 4) {
    // --- BÀI 4: Đảo ngược mảng ---
    let n = +prompt("Bạn muốn nhập bao nhiêu số?");
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(+prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    }
    document.write("Mảng ban đầu: " + numbers + "<br>");
    
    let numbersDaoNguoc = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        numbersDaoNguoc.push(numbers[i]);
    }
    document.write("Mảng đảo ngược: " + numbersDaoNguoc);

} else if (chon === 5) {
    // --- BÀI 5: Đếm số nguyên âm ---
    let n = +prompt("Bạn muốn nhập bao nhiêu số?");
    let numbers = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        let num = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
        numbers.push(num);
        if (num < 0) {
            count++;
        }
    }
    document.write("Mảng: " + numbers + "<br>Số lượng số nguyên âm: " + count);

} else if (chon === 6) {
    // --- BÀI 6: Tìm số V trong mảng ---
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(+prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    }
    let V = +prompt("Nhập số nguyên V cần tìm:");
    let check = false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === V) {
            check = true;
        }
    }
    if (check === true) {
        alert("Number X is in the array");
    } else {
        alert("Number X is not in the array");
    }

} else if (chon === 7) {
    // --- BÀI 7: Sắp xếp giảm dần ---
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(+prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    }
    document.write("Mảng trước khi sắp xếp: " + numbers + "<br>");
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    document.write("Mảng giảm dần: " + numbers);

} else if (chon === 8) {
    // --- BÀI 8: Gộp mảng a và b thành c ---
    let a = [];
    let b = [];
    for (let i = 0; i < 10; i++) {
        a.push(+prompt("Nhập mảng a - phần tử " + (i + 1) + ":"));
    }
    for (let i = 0; i < 10; i++) {
        b.push(+prompt("Nhập mảng b - phần tử " + (i + 1) + ":"));
    }
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i]);
    }
    for (let i = 0; i < b.length; i++) {
        c.push(b[i]);
    }
    document.write("Mảng a: " + a + "<br>Mảng b: " + b + "<br>Mảng c sau khi gộp: " + c);

} else {
    alert("Lựa chọn không hợp lệ!");
}

