let count = 0;
let N = 2;
let result = "";

while (count < 20) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            check = false;
            break;
        }
    }
    if (check) {
        result += N + " ";
        count++;
    }
    N++;
}

alert("20 số nguyên tố đầu tiên là:\n" + result);
console.log("20 số nguyên tố đầu tiên là:", result);