function isEven(number) {
    return number % 2 === 0;
}

function chayKiemTra() {
    let input = prompt("Nhập vào 1 số nguyên bất kỳ:");
    
    if (input !== null && input.trim() !== "") {
        let num = Number(input);
        
        if (isNaN(num)) {
            alert("Vui lòng nhập một số hợp lệ.");
        } else {
            let result = isEven(num);
            alert(`Kết quả kiểm tra chẵn: ${result}`);
        }
    }
}