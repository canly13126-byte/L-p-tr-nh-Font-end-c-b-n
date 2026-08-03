let math = prompt("Nhập điểm môn Toán (math):");
let physics = prompt("Nhập điểm môn Lý (physics):");
let chemistry = prompt("Nhập điểm môn Hóa (chemistry):");

let average = (Number(math) + Number(physics) + Number(chemistry)) / 3;

alert("Điểm trung bình của 3 môn học là: " + average.toFixed(2));