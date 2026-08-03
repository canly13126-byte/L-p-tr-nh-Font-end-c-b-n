let numbers = [];

for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    numbers.push(randomNum);
}

document.write("Mảng ngẫu nhiên là: " + numbers);