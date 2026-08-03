let mang = []; 
function kiemTra() {
    let k = parseInt(document.getElementById("soK").value);
    let dem = 0;
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] === k) {
            dem = dem + 1;
        }
    }
    document.getElementById("ketQua").innerHTML = "Số " + k + " xuất hiện " + dem + " lần.";
}