const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit"); //logowanie przez przycisk
const loginErrorMsg = document.getElementById("login-error-msg"); //wiadomosc 

const checkbox = document.querySelector("#showPassword");
checkbox.addEventListener("click", togglePassword);

function togglePassword () {
 const password = document.querySelector("#password-field");
  
    // jezeli checkbox jest zaznaczony
    if(checkbox.checked) {
        console.log("Checkbox jest zaznaczony. JavaScript, pokaz haslo!");
        password.setAttribute("type", "text");
        }
    // jezeli checkbox nie jest zaznaczony
    else {
        console.log("Checkbox odznaczony. Ukryj haslo!");
        password.setAttribute("type", "password");
        }
}

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
