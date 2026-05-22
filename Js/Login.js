// Wait until the DOM is fully loaded before running
document.addEventListener("DOMContentLoaded", function () {

    // Get references to the eye icon and password input field
    const passwordEye = document.getElementById("passwordEye");
    const passwordInput = document.getElementById("passwordinput");

    // Only attach the event if both elements exist
    if (passwordEye && passwordInput) {

        // Toggle password visibility when the eye icon is clicked
        passwordEye.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                // Show the password
                passwordInput.type = "text";
                passwordEye.src = "img/showed.png";
            } else {
                // Hide the password
                passwordInput.type = "password";
                passwordEye.src = "img/hide.png";
            }
        });
    }

// Identify the login form and button elements in the page
const form = document.getElementById("loginform");
const loginBtn = document.getElementById("login-btn");

// Only proceed if the login form exists in the DOM
    if (form) {

        // Handle the form submission event
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Capture user input for authentication
            let username = document.getElementById("usernameinput").value.trim();
            let password = document.getElementById("passwordinput").value.trim();

            // Enforce basic validation
            if (!username || !password) {
                alert("Please enter username and password");
                return;
            }

            const storedUser = localStorage.getItem(username);

            if (storedUser) {
                const user = JSON.parse(storedUser);
                
                if (user.password === password) {
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    
                    loginBtn.disabled = true;
                    loginBtn.textContent = "Logging in...";

                    setTimeout(() => {
                        alert("Login successful! Welcome to HealthSync.");
                        window.location.href = "landing.html";
                    }, 1200);   
                } else {
                    alert("Incorrect password. Please try again.");
                }
            } else {
                alert("User not found. Please register first.");
            }
        });
    }
});


//buttons to redirect to plans  
document.getElementById("redirectplans").onclick = function() {window.location.href='plans.html'};

//clear localstorage and notify user
document.getElementById("clearaccountbtn").onclick = function() {localStorage.clear();
    alert("user registered cleared")
};