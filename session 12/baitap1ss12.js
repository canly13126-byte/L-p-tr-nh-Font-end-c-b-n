let a = Number(prompt("Nhập vào số a:"));
let b = Number(prompt("Nhập vào số b:"));

if (b === 0) {
    console.log("Không thể chia cho số 0!");
    alert("Không thể chia cho số 0!");
} else {
    if (a % b === 0) {
        console.log(`${a} chia hết cho ${b}`);
        alert(`${a} chia hết cho ${b}`);
    } else {
        console.log(`${a} không chia hết cho ${b}`);
        alert(`${a} không chia hết cho ${b}`);
    }
}