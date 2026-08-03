function chayBai(bai) {
    switch (bai) {
        case 1: {
            for (let i = 1; i <= 100; i++) {
                console.log(i);
                if (i === 99) {
                    alert("Đã hoàn thành!");
                }
            }
            break;
        }
        case 2: {
            while (true) {
                let temp = Number(prompt("Nhập vào nhiệt độ hiện tại:"));
                if (temp > 100) {
                    alert("Vui lòng giảm nhiệt độ!");
                } else if (temp < 20) {
                    alert("Vui lòng tăng nhiệt độ!");
                } else {
                    alert("Nhiệt độ bình thường.");
                    break;
                }
            }
            break;
        }
        case 3: {
            let a = 0, b = 1, next;
            let result = "0 1 ";
            for (let i = 3; i <= 20; i++) {
                next = a + b;
                result += next + " ";
                a = b;
                b = next;
            }
            alert("20 số Fibonacci đầu tiên:\n" + result);
            break;
        }
        case 4: {
            let a = 0, b = 1, next;
            while (true) {
                next = a + b;
                if (next % 5 === 0) {
                    alert(`Số Fibonacci đầu tiên chia hết cho 5 là: ${next}`);
                    break;
                }
                a = b;
                b = next;
            }
            break;
        }
        case 5: {
            let a = 0, b = 1, next;
            let sum = a + b;
            for (let i = 3; i <= 20; i++) {
                next = a + b;
                sum += next;
                a = b;
                b = next;
            }
            alert(`Tổng của 20 số Fibonacci đầu tiên là: ${sum}`);
            break;
        }
        case 6: {
            let count = 0, sum = 0, num = 1;
            while (count < 30) {
                if (num % 7 === 0) {
                    sum += num;
                    count++;
                }
                num++;
            }
            alert(`Tổng của 30 số đầu tiên chia hết cho 7 là: ${sum}`);
            break;
        }
        case 7: {
            let result = "";
            for (let i = 1; i <= 100; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    result += "FizzBuzz\n";
                } else if (i % 3 === 0) {
                    result += "Fizz\n";
                } else if (i % 5 === 0) {
                    result += "Buzz\n";
                } else {
                    result += i + "\n";
                }
            }
            console.log(result);
            alert("Đã in kết quả FizzBuzz ra Console. Hãy ấn F12 để kiểm tra.");
            break;
        }
    }
}