function findMin(arr) {
    if (arr.length === 0) {
        return "Mảng rỗng";
    }
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function chayKiemTra() {
    const arr1 = [3, 5, 1, 8, -3, 7, 8];
    const arr2 =[];
    const arr3 = [];
    const arr4 =[];

    let result = "";
    result += `Mảng 1: [${arr1}] -> Min: ${findMin(arr1)}\n`;
    result += `Mảng 2: [${arr2}] -> Min: ${findMin(arr2)}\n`;
    result += `Mảng 3: [${arr3}] -> Min: ${findMin(arr3)}\n`;
    result += `Mảng 4: [${arr4}] -> Min: ${findMin(arr4)}`;

    alert(result);
}