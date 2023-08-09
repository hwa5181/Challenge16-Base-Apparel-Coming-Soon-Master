const myForm = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const submit = document.getElementById("submit");
const iconErr = document.getElementById("icon-error");
const errMsg = document.getElementById("error-msg");


myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let hasError = false;

    // Custom email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.style.outline = '1px solid var(--soft-red)';
        iconErr.style.display = "block";
        errMsg.style.display = "block";
        hasError = true;
    } 

    if (!hasError) {
        alert("Form Submitted.");
        emailInput.placeholder = "Email Address";
        myForm.reset();
    }

});

// Add event listeners to reset when input is focused
emailInput.addEventListener('focus', function () {
    emailInput.style.outline = 'none';
    iconErr.style.display = "none";
    errMsg.style.display = "none"
});