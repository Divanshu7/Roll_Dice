function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
  
    var img1 = document.getElementById("imgx");
    img1.setAttribute("src", randomImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
  
    var img2 = document.getElementById("imgy");
    img2.setAttribute("src", randomImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    resultText.offsetHeight;

    // Set opacity to 0 to start the transition
    resultText.style.opacity = 0;

    // Set opacity to 1 to trigger the transition
    resultText.style.opacity = 1;

    // Remove the style after the transition is complete
    setTimeout(function() {
        resultText.style.opacity = '';
    }, 1000);
}