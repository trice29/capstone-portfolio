document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("#menuButton");
    const navLinks = document.querySelector("#navLinks");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show");

            const menuIsOpen = navLinks.classList.contains("show");
            menuButton.setAttribute("aria-expanded", menuIsOpen);
        });
    }

    const messageButton = document.querySelector("#messageButton");
    const messageText = document.querySelector("#messageText");

    if (messageButton && messageText) {
        messageButton.addEventListener("click", function () {
            messageText.textContent =
                "Thanks for visiting my portfolio! I am excited to keep learning and creating.";

            messageButton.textContent = "Message Shown";
        });
    }
});
