// Initialize logic once the document structure is fully available
document.addEventListener("DOMContentLoaded", function () {
    //form container, email input field, and submit trigger
    const form = document.getElementById("forgot-password");
    const emailInput = document.getElementById("emailinput");
    const submitBtn = document.getElementById("submitbtn");

    // Ensure the form exists before binding behavior
    if (form) {
        // Define the password reset workflow on form submission
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // Capture user’s email entry
            const email = emailInput.value.trim();

            // Guard clause: require presence of email
            if (!email) {
                alert("Please enter your email address.");
                emailInput.focus();
                return;
            }
            //enforce basic email format
            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                emailInput.focus();
                return;
            }
            // Search whether a matching account exists
            let userFound = false;
            let usernameToReset = null;
            // Iterate through stored accounts to locate matching email
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                // Skip non-user keys and attempt to parse account data
                if (key && key !== "currentUser" && key !== "rememberedUser") {
                    try {
                        const user = JSON.parse(localStorage.getItem(key));
                        // Confirm email match (case-insensitive)
                        if (user.email && user.email.toLowerCase() === email.toLowerCase()) {
                            userFound = true;
                            usernameToReset = key;
                            break;
                        }
                    } catch (err) {}
                }
            }
            // check if no account associated with provided email
            if (!userFound) {
                alert("No account found with this email address.");
                return;
            }
            // Persist the account identifier for reset workflow
            localStorage.setItem("userToReset", usernameToReset);
            // Transition UI state to indicate processing
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
            // Simulate asynchronous reset link dispatch
            setTimeout(() => {
                alert("Reset link has been sent!");
                // redirect to reset page
                window.location.href = "NewPassword.html";  
            }, 1200);
        });
    }
});