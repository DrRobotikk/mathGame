function makeQuestion() {
    var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);
    var total = x + y;
    return [x, y, total];
}

function startGame() {


    var enemyLife = 10;
    var playerLife = 10;

    while (enemyLife > 0 && playerLife > 0) {
        var question = makeQuestion();
        total = question[2];
        var playerAnswer = prompt("What is " + question[0] + " + " + question[1] + "?");
        if (playerAnswer == total) {
            enemyLife--;
            alert('Correct! Enemy life: ' + enemyLife);
        } else {
            playerLife--;
            alert('Wrong! Player life: ' + playerLife);
        }


}
}




