let weight = parseFloat(prompt("Mời bạn nhập vào cân nặng (kg):"));
let height = parseFloat(prompt("Mời bạn nhập vào chiều cao (m):"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
    alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + " - Cân nặng thấp (gầy)");
} else if (bmi < 25) {
    alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + " - Bình thường");
} else if (bmi < 30) {
    alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + " - Tiền béo phì");
} else if (bmi < 35) {
    alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + " - Béo phì độ I");
} else if (bmi < 40) {
    alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + " - Béo phì độ II");
} else {
    alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + " - Béo phì độ III");
}