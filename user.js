// The function I created below is to accept the name and zip code of the user and after collecting them it displays a secret message when called.
function VALIDATION() {
    // I created two variables to get the values of the first name and last name  of the user from the form.
    var firstName = document.forms["UserValidation"]["FName"].value;
    var lastName = document.forms["UserValidation"]["LName"].value;
    // The fullName variable I added below adds the first and last name variable together.
    var fullName = firstName + " " + lastName;
    // The zipCode variable gets the user's zip code.
    var zipCode = document.forms["UserValidation"]["Zip"].value;
    // These variables will store the secret message and the error that will display if the user's input is valid or invalid.
    var name = "";
    var code = "";
    var message = "";

    // I added a conditional statement to check if the user's name is valid and to display an error if the name is invalid.
    if ((fullName.length >= 20) || (fullName.length < 9)) {
        name = "Invalid name";
    }
    // This conditional statement will execute if the zip code is valid and will display an error if not.
    if ((zipCode === "") || (zipCode > 99999) || (zipCode < 9999) || (zipCode < 999) || (zipCode < 99)) {
        code = "Invalid zip code";
    }
    // While this if statement will execute if the user's name and zip code are valid and will display the secret message if they are.
    if ((fullName.length <= 20) && (zipCode < 99999) && (zipCode > 9999) && (zipCode > 999) && (zipCode > 99)) {
        message = "You are ACCEPTED!";
        // This redirects the page if the user's input is valid
        document.getElementById("redirect").click();
    }

    // The next few lines of code displays the secret message or the error message in the HTML element with the ids assigned to the HTML.
    document.getElementById("name").innerHTML = name;
    document.getElementById("code").innerHTML = code;
    document.getElementById("secret").innerHTML = message;
    // The return function below returns false to prevent the form from submitting if there is a validation message.
    return false;
}
