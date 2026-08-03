let year = parseInt(prompt("Mời bạn nhập vào một năm cần kiểm tra:"));

if (isNaN(year) || year <= 0) {
    alert("Vui lòng nhập một năm hợp lệ!");
} else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        alert("Năm " + year + " là năm nhuận.");
    } else {
        alert("Năm " + year + " KHÔNG PHẢI là năm nhuận.");
    }
}