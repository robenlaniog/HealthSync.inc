document.addEventListener("DOMContentLoaded", function () {
    checkLoginStatus();
});

function checkLoginStatus() {
    const currentUser = localStorage.getItem("currentUser");

    // TARGET CORRECT NAVS
    const mainNav = document.querySelector('.main-nav');
    const accountNav = document.querySelector('.myaccount');

    if (!mainNav || !accountNav) return;

    // Clear old buttons (avoid duplicates)
    accountNav.innerHTML = "";

    if (currentUser) {
        try {
            const user = JSON.parse(currentUser);
            showLoggedInUI(mainNav, accountNav, user);
        } catch (e) {
            localStorage.removeItem("currentUser");
            showLoggedOutUI(mainNav, accountNav);
        }
    } else {
        showLoggedOutUI(mainNav, accountNav);
    }
}

function showLoggedInUI(mainNav, accountNav, user) {
    // Fix Home link
    const homeLink = Array.from(mainNav.querySelectorAll('a')).find(link => 
        link.textContent.toLowerCase().includes("home")
    );
    if (homeLink) homeLink.href = "landing.html";

    // My Account Button
    const accountBtn = document.createElement('a');
    accountBtn.href = "#";
    accountBtn.id = "account-btn";
    accountBtn.textContent = `👤 ${user.name || 'My Account'}`;
    accountBtn.className = "nav-auth-btn account-btn";

    // Logout Button
    const logoutBtn = document.createElement('a');
    logoutBtn.href = "#";
    logoutBtn.id = "logout-btn";
    logoutBtn.textContent = "Logout";
    logoutBtn.className = "nav-auth-btn logout-btn";

    // Logout Logic
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("currentUser");
            localStorage.removeItem("rememberedUser");
            window.location.href = "Login.html";
        }
    });

    // Account Click
    accountBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`Welcome, ${user.name || 'User'}!\n\nDashboard coming soon.`);
    });

    // ADD TO CORRECT NAV
    accountNav.appendChild(accountBtn);
    accountNav.appendChild(logoutBtn);
}

function showLoggedOutUI(mainNav, accountNav) {
    // Change Home link to Login
    const homeLink = Array.from(mainNav.querySelectorAll('a')).find(link => 
        link.textContent.toLowerCase().includes("home")
    );
    if (homeLink) homeLink.href = "Login.html";

    // Clear account nav
    accountNav.innerHTML = "";
}