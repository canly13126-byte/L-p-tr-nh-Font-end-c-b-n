function processConfirm() {
    let answer = confirm("Bạn có muốn chơi cờ vua không?");
    let result = "";

    if (answer === true) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }

    return result;
}

function chayChuongTrinh() {
    let output = processConfirm();
    alert(output);
}