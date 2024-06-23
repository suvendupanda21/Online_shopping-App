document.addEventListener("DOMContentLoaded", function() {
    let formHeader = document.querySelector("h1");
    let signUpButton = document.querySelector(".signupbtn");
    let loginButton = document.querySelector(".loginbtn");
    let nameField = document.querySelector(".name-field");

    signUpButton.addEventListener("click", (event) => {
        event.preventDefault();  // Prevent form submission
        formHeader.innerHTML = "Sign up form";
        signUpButton.style.backgroundColor = "purple";
        loginButton.style.backgroundColor = "transparent";
        nameField.style.display = "block"; // Show the name field
    });

    loginButton.addEventListener("click", (event) => {
        event.preventDefault();  // Prevent form submission
        formHeader.innerHTML = "Login form";
        loginButton.style.backgroundColor = "purple";
        signUpButton.style.backgroundColor = "transparent";
        nameField.style.display = "none"; // Hide the name field
    });
});

