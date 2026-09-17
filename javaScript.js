// =========================================
// KLECOMMERCE LOGIN & REGISTER
// =========================================


// =========================================
// LOGIN FUNCTION
// =========================================

function login(event) {

    // Stop the form from refreshing the page
    event.preventDefault();
    alert("Login Successful!");
    window.location.href = "index.html";


    // Get username and password
    let username =
        document.getElementById("loginUsername").value.trim();

    let password =
        document.getElementById("loginPassword").value;


    // Get registered user details
    let savedUsername =
        localStorage.getItem("kle_username");

    let savedPassword =
        localStorage.getItem("kle_password");


    // Check login details
    if (
        username === savedUsername &&
        password === savedPassword
    ) {

        // Save login status
        localStorage.setItem(
            "kle_loggedin",
            "true"
        );


        // Show success message
        alert("Login Successful!");


        // Redirect to homepage
        window.location.href = "index.html";

    }

    else {

        // Wrong username or password
        alert("Invalid Username or Password!");

    }

}



// =========================================
// REGISTER FUNCTION
// =========================================

function register(event) {

    // Stop form from refreshing
    event.preventDefault();
    alert("Account Created Successfully!");
    window.location.href = "index.html";


    // Get form values
    let username =
        document.getElementById("registerUsername").value.trim();

    let email =
        document.getElementById("registerEmail").value.trim();

    let password =
        document.getElementById("registerPassword").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;


    // Check password match
    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    // Check password length
    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters!"
        );

        return;
    }


    // Check existing username
    let existingUsername =
        localStorage.getItem("kle_username");


    if (existingUsername === username) {

        alert("Username already exists!");

        return;
    }


    // Save user information
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


    // Mark user as logged in
    localStorage.setItem(
        "kle_loggedin",
        "true"
    );


    // Success message
    alert("Account Created Successfully!");


    // Redirect to homepage
    window.location.href = "index.html";

}



// =========================================
// SHOW / HIDE LOGIN PASSWORD
// =========================================

function togglePassword() {

    let password =
        document.getElementById("loginPassword");


    if (password.type === "password") {

        password.type = "text";

    }

    else {

        password.type = "password";

    }

}



// =========================================
// SHOW / HIDE REGISTER PASSWORD
// =========================================

function toggleRegisterPassword() {

    let password =
        document.getElementById("registerPassword");


    if (password.type === "password") {

        password.type = "text";

    }

    else {

        password.type = "password";

    }

}



// =========================================
// SHOW / HIDE CONFIRM PASSWORD
// =========================================

function toggleConfirmPassword() {

    let password =
        document.getElementById("confirmPassword");


    if (password.type === "password") {

        password.type = "text";

    }

    else {

        password.type = "password";

    }

}