let chuoi = prompt("Nhap vao cac so cach nhau bang dau phay:");
let mang = chuoi.split(",");

let max = Number(mang[0]);

for (let i = 1; i < mang.length; i++) {
    if (Number(mang[i]) > max) {
        max = Number(mang[i]);
    }
}

alert("So lon nhat la: " + max);