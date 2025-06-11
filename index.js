let emailInput = document.getElementById("email");
let email = emailInput.value.trim();
let button = document.getElementById("btn-subscribe");
let span = document.getElementById("hidden-span");


function validateEmail(email) {
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
        // valid email
        localStorage.setItem("validEmail", email);
        window.location.href = "success.html";
    } else {
        // invalid email
        span.innerHTML = 'Valid email required';
        emailInput.style.backgroundColor = "var(--colors-red-100, #FFE7E6)";
        emailInput.style.border = "1px solid var(--colors-red, #FF6155)";
        return;
    }
}

button.addEventListener('click', validateEmail)