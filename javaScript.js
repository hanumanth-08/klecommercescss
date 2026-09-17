function register(event) {

```
event.preventDefault();

let username = document.getElementById("registerUsername").value;
let email = document.getElementById("registerEmail").value;
let password = document.getElementById("registerPassword").value;
let confirmPassword = document.getElementById("confirmPassword").value;

if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
}

if (password.length < 6) {
    alert("Password must contain at least 6 characters!");
    return;
}

// Store user temporarily in browser
localStorage.setItem("username", username);
localStorage.setItem("email", email);
localStorage.setItem("password", password);

alert("Registration successful!");

window.location.href = "login.html";
```

}

function login(event) {

```
event.preventDefault();

let username = document.getElementById("loginUsername").value;
let password = document.getElementById("loginPassword").value;

let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

if (username === savedUsername && password === savedPassword) {

    localStorage.setItem("loggedIn", "true");

    alert("Login successful!");

    window.location.href = "index.html";

} else {

    alert("Invalid username or password!");

}
```

}
