let bai = Number(prompt("Nhập số bài muốn chạy (1-8):"));

switch (bai) {
    case 1: {
        let c = Number(prompt("Nhập vào độ C:"));
        let f = (c * 9) / 5 + 32;
        alert(`${c} độ C bằng ${f} độ F`);
        console.log(`${c} độ C bằng ${f} độ F`);
        break;
    }
    case 2: {
        let m = Number(prompt("Nhập vào số mét:"));
        let ft = m * 3.2808;
        alert(`${m} mét bằng ${ft} feet`);
        console.log(`${m} mét bằng ${ft} feet`);
        break;
    }
    case 3: {
        let a = Number(prompt("Nhập độ dài cạnh hình vuông a:"));
        let s = a * a;
        alert(`Diện tích hình vuông là: ${s}`);
        console.log(`Diện tích hình vuông là: ${s}`);
        break;
    }
    case 4: {
        let a = Number(prompt("Nhập chiều dài a:"));
        let b = Number(prompt("Nhập chiều rộng b:"));
        let s = a * b;
        alert(`Diện tích hình chữ nhật là: ${s}`);
        console.log(`Diện tích hình chữ nhật là: ${s}`);
        break;
    }
    case 5: {
        let a = Number(prompt("Nhập cạnh kề a:"));
        let b = Number(prompt("Nhập cạnh kề b:"));
        let s = (a * b) / 2;
        alert(`Diện tích tam giác vuông là: ${s}`);
        console.log(`Diện tích tam giác vuông là: ${s}`);
        break;
    }
    case 6: {
        let a = Number(prompt("Giải pt ax + b = 0. Nhập a:"));
        let b = Number(prompt("Nhập b:"));
        if (a === 0) {
            if (b === 0) {
                alert("Phương trình vô số nghiệm");
            } else {
                alert("Phương trình vô nghiệm");
            }
        } else {
            let x = -b / a;
            alert(`Phương trình có nghiệm x = ${x}`);
        }
        break;
    }
    case 7: {
        let a = Number(prompt("Giải pt ax^2 + bx + c = 0. Nhập a:"));
        let b = Number(prompt("Nhập b:"));
        let c = Number(prompt("Nhập c:"));
        if (a === 0) {
            if (b === 0) {
                if (c === 0) alert("Phương trình vô số nghiệm");
                else alert("Phương trình vô nghiệm");
            } else {
                alert(`Phương trình có 1 nghiệm x = ${-c / b}`);
            }
        } else {
            let delta = b * b - 4 * a * c;
            if (delta < 0) {
                alert("Phương trình vô nghiệm");
            } else if (delta === 0) {
                alert(`Phương trình có nghiệm kép x = ${-b / (2 * a)}`);
            } else {
                let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
            }
        }
        break;
    }
    case 8: {
        let tuoi = Number(prompt("Nhập vào một số nguyên:"));if (Number.isInteger(tuoi) && tuoi > 0 && tuoi < 120) {
            alert(`${tuoi} là tuổi của một người hợp lệ`);
        } else {
            alert(`${tuoi} không phải là tuổi của một người hợp lệ`);
        }
        break;
    }
    default:
        alert("Số bài không hợp lệ! Vui lòng nhập từ 1 đến 8.");
}