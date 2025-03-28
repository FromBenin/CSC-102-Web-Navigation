// My function written below is to determine if the word/phrase written in the form is a palindrome or not, the function is called PALINDROME().
function PALINDROME() {
    // I created a variable named string which gets the word/phrase written in the form.
    var string = document.forms["Palindrome"]["String"].value;
    // Then I created a another variable which removes all non-alphanumeric characters and convert the remaining characters to lowercase.
    var replacePal = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // I later added a splitStr, a reverseStr and a joinStr variable which splits, reverses and joins the result of the replaceStr variable.
    var splitPal = replacePal.split("");
    var reversePal = splitPal.reverse();
    var joinPal = reversePal.join("");
    // The final variable I created is used to display the result of the form.
    var result = "";

    while (true) {
        // First call the string variable.
        string;
        // And the replacePal variable.
        replacePal;
        
        // This if statement will only executes if the string variable is empty when the form if being submitted.
        if (string == "") {
            result = "Give an input";
            break;
        }
        // I then added an else if statement which will execute if the replacePal variable is not equal to the joinPal variable.
        else if (replacePal !== joinPal) {
            result = "The word, phrase or sequence written above is not a palindrome.";
            break;
        }
        // I ended the else if statement with an else statement which executes if the else if condition is not true.
        else {
            result = "The word, phrase or sequence written above is a palindrome.";
            break;
        }
}

    // The next line of code I wrote is to display the result of the form after accepting the input.
    document.getElementById("result").innerHTML = result;
    // The return function I added below returns false so as to prevent the form from submitting.
    return false;
}