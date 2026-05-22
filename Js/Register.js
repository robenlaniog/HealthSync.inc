// Get references to the eye icon and password input field
const passwordEye = document.getElementById("passwordEye");
const confirmEye = document.getElementById("confirmEye");
// Toggle password visibility when the eye icon is clicked
passwordEye.addEventListener("click", () => toggle(passwordEye, passwordinput));
confirmEye.addEventListener("click", () => toggle(confirmEye, confirmpasswordinput));
function toggle(eye, input) {
    if (input.type === "password") {
        // Show the password
        input.type = "text";
        eye.src = "img/showed.png";
    } else {
        // Hide the password
        input.type = "password";
        eye.src = "img/hide.png";
    }
}
// FORM HANDLER
const form = document.getElementById("registerform");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // INPUT FIELDS
        let name = document.getElementById("usernameinput").value.trim();;
        let email = document.getElementById("emailinput").value.trim();;
        let phonenumber = document.getElementById("phonenumberinput").value.trim();;
        let password = document.getElementById("passwordinput").value;
        let confirmpassword = document.getElementById("confirmpasswordinput").value;

        const registerBtn = document.getElementById("registerbtn");
    
        if (!name || !email || !password || !confirmpassword || !phonenumber) {
            alert("Please fill up all the fields");
            return;
        }
    
        if (password !== confirmpassword) {
            alert("Passwords do not match!");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            passwordInput.focus();
            return;
        }
        //enforce basic email format
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }
    
        const user = {
            name: name,
            email: email,
            phonenumber: phonenumber,
            password: password.trim()
        };

        registerBtn.disabled = true;
        registerBtn.textContent = "Registering...";

        localStorage.setItem(name, JSON.stringify(user));

        setTimeout(() => {
            alert("Registration successful! Please login now.");
            window.location.href = "Login.html";
        }, 1200);

    });