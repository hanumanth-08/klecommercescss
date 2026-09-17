/* ==========================================
KLECommerce LOGIN
========================================== */

function login(event) {

```
event.preventDefault();

let username =
    document.getElementById("loginUsername").value.trim();

let password =
    document.getElementById("loginPassword").value;


let savedUsername =
    localStorage.getItem("kle_username");

let savedPassword =
    localStorage.getItem("kle_password");


if (username === savedUsername &&
    password === savedPassword) {

    localStorage.setItem(
        "kle_loggedin",
        "true"
    );

    alert("Login Successful!");

    window.location.href = "index.html";

} else {

    alert("Invalid Username or Password!");

}
```

}

/* ==========================================
KLECommerce REGISTER
========================================== */

function register(event) {

```
event.preventDefault();

let username =
    document.getElementById("registerUsername").value.trim();

let email =
    document.getElementById("registerEmail").value.trim();

let password =
    document.getElementById("registerPassword").value;

let confirmPassword =
    document.getElementById("confirmPassword").value;


/* Password check */

if (password !== confirmPassword) {

    alert("Passwords do not match!");

    return;

}


/* Password length */

if (password.length < 6) {

    alert("Password must contain at least 6 characters!");

    return;

}


/* Check username */

let existingUsername =
    localStorage.getItem("kle_username");


if (existingUsername === username) {

    alert("Username already exists!");

    return;

}


/* Save account */

localStorage.setItem(
    "kle_username",
    username
);

localStorage.setItem(
    "kle_email",
    email
);

localStorage.setItem(
    "kle_password",
    password
);


alert("Registration Successful!");

window.location.href = "login.html";
```

}
