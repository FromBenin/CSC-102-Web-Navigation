/* The function below is the shakeBall() function which shakes the magic 8 ball and generates an answer based on the number the ball displays. */
function shakeBall() {
    // The variable ball generates a random number between 1 and 6 for the first ball.
    var ball = Math.ceil(Math.random() * 10);
    // Initialize the answer variable.
    var answer = "";

    // I added a while loop with an if/else if and else statement that determines the answer based on the number given by the ball.
    while (true) {
        // I first have to call the ball variable.
        ball;
        // I then give the if condition, this will execute if the number is below 4 or less, the answer is positive.
        if (ball <= 4) {
            answer = "Yes definitely!";
            document.getElementById("answer").style.color = "green";
            break;
        } else if (ball <= 8) {
            // Now I add an else if statement which executes if the number is between 5 and 8.
            answer = "Ask again later.";
            document.getElementById("answer").style.color = "orange";
            break;
        } else {
            // I will then end this loop with the else statement which will execute if the number is greater than 8.
            answer = "No, not likely.";
            document.getElementById("answer").style.color = "red";
            break;
        }
}

    // The last line of code displays the answer in the HTML element with the id "answer".
    document.getElementById("answer").innerHTML = answer;
}