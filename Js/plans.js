/* choose plan */
function choosePlan(planName, price) {
    const currentUser = localStorage.getItem("currentUser");

    /* check if user is logged in */
    if (!currentUser) {
        if (confirm("You need to be logged in to choose a plan.\n\nGo to login page?")) {
            window.location.href = "Login.html";
        }
        return;
    }

    /* get selected billing cycle */
    const cycle = document.getElementById("btn-yearly").classList.contains("active")
        ? "Yearly"
        : "Monthly";

    /* calculate final price based on cycle */
    const finalPrice = cycle === "Yearly"
        ? Math.round(price * 12 * 0.9).toLocaleString()
        : price.toLocaleString();

    /* set billing period label */
    const period = cycle === "Yearly" ? "/ year (10% off)" : "/ month";

    /* show plan summary alert */
    alert(
        "You selected:\n\n" +
        "Plan: " + planName + " Plan\n" +
        "Price: ₱" + finalPrice + " " + period + "\n\n" +
        "Redirecting to checkout soon..."
    );
}

/* set billing cycle toggle */
function setCycle(cycle) {
    const btnMonthly = document.getElementById("btn-monthly");
    const btnYearly  = document.getElementById("btn-yearly");
    const whyYearly  = document.getElementById("why-yearly");

    /* toggle active state and show/hide yearly panel */
    if (cycle === "yearly") {
        btnYearly.classList.add("active");
        btnMonthly.classList.remove("active");
        whyYearly.classList.add("visible");
    } else {
        btnMonthly.classList.add("active");
        btnYearly.classList.remove("active");
        whyYearly.classList.remove("visible");
    }
}