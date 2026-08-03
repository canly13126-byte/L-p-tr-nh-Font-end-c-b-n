let run = true;
let ten = "";
let tuoi = 0;

while (run) {
    let menu = "--- MENU CHƯƠNG TRÌNH ---\n" +
               "1. Nhập tên của người dùng\n" +
               "2. Nhập tuổi của người dùng\n" +
               "3. In tên và tuổi của người dùng\n" +
               "4. In bảng cửu chương của một số\n" +
               "5. Kiểm tra số nhập vào là số chẵn hay lẻ\n" +
               "6. Tính tổng các số từ 1 đến N\n" +
               "7. In các số trong một dãy\n" +
               "8. Kiểm tra số nhập vào có phải là số nguyên tố hay không\n" +
               "9. In chuỗi đảo ngược của một chuỗi\n" +
               "10. Thoát khỏi chương trình\n\n" +
               "Mời bạn nhập lựa chọn (1-10):";
               
    let chon = +prompt(menu);

    switch (chon) {
        case 1:
            ten = prompt("Nhập tên của bạn:");
            break;
        case 2:
            tuoi = +prompt("Nhập tuổi của bạn:");
            break;
        case 3:
            alert("Tên: " + ten + ", Tuổi: " + tuoi);
            break;
        case 4:
            let s1 = +prompt("Nhập số muốn in bảng cửu chương:");
            let bcc = "";
            for (let i = 1; i <= 10; i++) {
                bcc += s1 + " x " + i + " = " + (s1 * i) + "\n";
            }
            alert(bcc);
            break;
        case 5:
            let s2 = +prompt("Nhập số cần kiểm tra chẵn/lẻ:");
            if (s2 % 2 === 0) {
                alert(s2 + " là số chẵn");
            } else {
                alert(s2 + " là số lẻ");
            }
            break;
        case 6:
            let n = +prompt("Nhập số N:");
            let tong = 0;
            for (let i = 1; i <= n; i++) {
                tong += i;
            }
            alert("Tổng từ 1 đến " + n + " là: " + tong);
            break;
        case 7:
            let daySo = prompt("Nhập dãy số (cách nhau bằng dấu phẩy):");
            alert("Dãy số vừa nhập: " + daySo);
            break;
        case 8:
            let s3 = +prompt("Nhập số cần kiểm tra số nguyên tố:");
            let snt = true;
            if (s3 < 2) snt = false;
            for (let i = 2; i <= Math.sqrt(s3); i++) {
                if (s3 % i === 0) {
                    snt = false;
                    break;
                }
            }
            if (snt) {
                alert(s3 + " là số nguyên tố");
            } else {
                alert(s3 + " không phải là số nguyên tố");
            }
            break;
        case 9:
            let chuoi = prompt("Nhập chuỗi cần đảo ngược:");
            let daoNguoc = "";
            for (let i = chuoi.length - 1; i >= 0; i--) {
                daoNguoc += chuoi[i];
            }
            alert("Chuỗi đảo ngược: " + daoNguoc);break;
        case 10:
            alert("Đã thoát chương trình!");
            run = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 10.");
    }
}