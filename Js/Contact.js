// select the send button
const sendBtn = document.querySelector(".send-btn");

/* click event section */
// run this function when the button is clicked
sendBtn.addEventListener("click", function () {

    /* input value section */
    const fullName = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const topic = document.querySelector("select").value;
    const message = document.querySelector("textarea").value.trim();

    /* empty field validation section */
    // check if there are empty fields
    if (!fullName || !email || !message || topic === "Select a topic") {

        // show warning message
        alert("Please complete all fields.");
        return;
    }

    /* email validation section */
    // check if the email format is valid
    if (!email.includes("@") || !email.includes(".")) {

        // show error message
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    /* loading button section */
    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    /* success message section */
    setTimeout(() => {
        // show success alert
        alert(
            "Message sent successfully!\n\n" +
            "Thank you for contacting HealthSync.\n" +
            "A confirmation email has been sent to:\n" +
            email
        );

        /* reset form section */
        document.querySelector('input[type="text"]').value = "";
        document.querySelector('input[type="email"]').value = "";
        document.querySelector("select").selectedIndex = 0;
        document.querySelector("textarea").value = "";

        /* reset button section */
        sendBtn.innerHTML = "SEND MESSAGE";
        sendBtn.disabled = false;
    }, 1200);

});