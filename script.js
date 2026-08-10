// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// Close menu after clicking navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeToggle.textContent = "🌙";

    } else {

        themeToggle.textContent = "☀️";

    }

});