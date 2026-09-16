document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu
    const menuButton = document.querySelector("#menuButton");
    const navLinks = document.querySelector("#navLinks");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show");

            const menuIsOpen = navLinks.classList.contains("show");
            menuButton.setAttribute("aria-expanded", menuIsOpen);
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

    // Contact form validation
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let valid = true;

            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const subject = document.querySelector("#subject");
            const message = document.querySelector("#message");

            const nameError = document.querySelector("#nameError");
            const emailError = document.querySelector("#emailError");
            const subjectError = document.querySelector("#subjectError");
            const messageError = document.querySelector("#messageError");
            const formSuccess = document.querySelector("#formSuccess");

            nameError.textContent = "";
            emailError.textContent = "";
            subjectError.textContent = "";
            messageError.textContent = "";
            formSuccess.textContent = "";

            if (name.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                valid = false;
            }

            if (email.value.trim() === "") {
                emailError.textContent = "Please enter your email.";
                valid = false;
            } else if (!email.validity.valid) {
                emailError.textContent = "Please enter a valid email.";
                valid = false;
            }

            if (subject.value.trim() === "") {
                subjectError.textContent = "Please enter a subject.";
                valid = false;
            }

            if (message.value.trim() === "") {
                messageError.textContent = "Please enter a message.";
                valid = false;
            }

            if (valid) {
                formSuccess.textContent = "Your message was submitted successfully!";
                contactForm.reset();
            }
        });
    }
});
