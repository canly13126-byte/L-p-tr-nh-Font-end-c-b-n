function sum(a, b) {
    return a + b;
}

function nhapVaTinhTong() {
    let num1 = prompt("Nhập số thứ nhất:");
    let num2 = prompt("Nhập số thứ hai:");
    
    if (num1 !== null && num2 !== null) {
        let n1 = Number(num1);
        let n2 = Number(num2);
        
        if (isNaN(n1) || isNaN(n2)) {
            alert("Lỗi: Vui lòng nhập số hợp lệ.");
        } else {
            let result = sum(n1, n2);
            alert(`Tổng của hai số là: ${result}`);
        }
    }
}