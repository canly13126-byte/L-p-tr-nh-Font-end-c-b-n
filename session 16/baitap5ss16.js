function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

function chayKiemTra() {
    let input = prompt("Nhập vào chuỗi ký tự cần kiểm tra:");
    
    if (input !== null) {
        let result = isPalindrome(input);
        if (result) {
            alert(`Chuỗi "${input}" là chuỗi đối xứng.`);
        } else {
            alert(`Chuỗi "${input}" KHÔNG phải là chuỗi đối xứng.`);
        }
    }
}