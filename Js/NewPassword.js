// Initialize password reset workflow once the document is ready
document.addEventListener("DOMContentLoaded", function () {
    //inputs, eye toggles, submit control
    const form = document.getElementById("newPasswordForm");
    const passwordInput = document.getElementById("passwordinput");
    const confirmInput = document.getElementById("confirmpasswordinput");
    const passwordEye = document.getElementById("passwordEye");
    const confirmEye = document.getElementById("confirmEye");
    const submitBtn = document.getElementById("submitbtn");
    //toggle visibility of a password field
    function togglePassword(eye, input) {
        if (input.type === "password") {
            input.type = "text";
            eye.src = "img/showed.png";
        } else {
            input.type = "password";
            eye.src = "img/hide.png";
        }
    }
    // Bind semantic toggles for both password fields
    if (passwordEye && passwordInput) {
        passwordEye.addEventListener("click", () => togglePassword(passwordEye, passwordInput));
    }
    if (confirmEye && confirmInput) {
        confirmEye.addEventListener("click", () => togglePassword(confirmEye, confirmInput));
    }
    //validate, update, redirect
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // Capture semantic values
            const password = passwordInput.value.trim();
            const confirmPassword = confirmInput.value.trim();
            const usernameToReset = localStorage.getItem("userToReset");
            //enforce semantic requirements
            if (!password || !confirmPassword) {
                alert("Please fill in both password fields.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                passwordInput.focus();
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                confirmInput.focus();
                return;
            }

            if (!usernameToReset) {
                alert("Session expired. Please start the forgot password process again.");
                window.location.href = "ForgotPassword.html";
                return;
            }
            //update stored user record
            const storedUser = localStorage.getItem(usernameToReset);
            if (storedUser) {
                const user = JSON.parse(storedUser);
                user.password = password;
                
                localStorage.setItem(usernameToReset, JSON.stringify(user));
                localStorage.removeItem("userToReset");
                // UI processing
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = "Updating...";
                }
                //success then redirect
                setTimeout(() => {
                    alert("Password successfully updated! You can now login with your new password.");
                    window.location.href = "Login.html";
                }, 1200);
            } else {
                //user not found
                alert("User not found. Please try again.");
                window.location.href = "ForgotPassword.html";
            }
        });
    }
});