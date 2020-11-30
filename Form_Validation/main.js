//Selector
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const errorMsg = document.querySelector("small");


//Event Handling
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInput();
})


//Functions
function checkInput() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = pass1.value;
    const passwordValue2 = pass2.value;

    if (usernameValue === '') {
        showError(username, "Username Cannot be blank");
    } else {
        showSuccess(username);
    }

    if (emailValue === '') {
        showError(email, "Email Cannot be blank");
    } else if (!isEmailValid(emailValue)) {
        showError(email, "Email ID is not valid");
    } else {
        showSuccess(email);
    }

    if (passwordValue === '') {
        showError(pass1, "Password Cannot be blank");
    } else {
        showSuccess(pass1);
    }

    if (passwordValue2 === '') {
        showError(pass2, "Confirm Password Cannot be blank");
    } else if (passwordValue2 != passwordValue) {
        showError(pass2, "Confirm Password is not same as Password");
    } else {
        showSuccess(pass2);
    }
}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = "form-control success";
}

function isEmailValid(email) {
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}