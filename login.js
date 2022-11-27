const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit"); //logowanie przez przycisk
const loginErrorMsg = document.getElementById("login-error-msg"); //wiadomosc 

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "werka" && password === "nie") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("You enter the wrong password."); //dodanie alertu kiedy sie zle haslo wpisze
        loginErrorMsg.style.opacity = 1;
    }
})