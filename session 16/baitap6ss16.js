function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

function chayKiemTra() {
    let arr1 =[];
    let arr2 =[];
    let arr3 =[5,-2,9,4];

    let result = "KẾT QUẢ TÍNH TỔNG MẢNG:\n\n";
    result += "Mảng 1: [" + arr1 + "] -> Tổng: " + sumArray(arr1) + "\n";
    result += "Mảng 2: [" + arr2 + "] -> Tổng: " + sumArray(arr2) + "\n";
    result += "Mảng 3: [" + arr3 + "] -> Tổng: " + sumArray(arr3);

    alert(result);
}