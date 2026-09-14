// Mobile menu button
const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("show");

        menuButton.setAttribute("aria-expanded", String(isOpen));
    });
}

// Show message button
const messageButton = document.querySelector("#messageButton");
const messageText = document.querySelector("#messageText");

if (messageButton && messageText) {
    messageButton.addEventListener("click", function () {
        messageText.textContent =
            "Thanks for visiting my portfolio! I am excited to keep learning and creating.";

        messageButton.textContent = "Message Shown";
    });
}
