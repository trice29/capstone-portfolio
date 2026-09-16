// =========================
// Mobile Menu Button
// =========================

const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("show");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "Close" : "Menu";
    });
}

// =========================
// Show Message Button
// =========================

const messageButton = document.querySelector("#messageButton");
const messageText = document.querySelector("#messageText");

if (messageButton && messageText) {
    messageButton.addEventListener("click", function () {
        messageText.textContent =
            "Thanks for visiting my portfolio! I am excited to keep learning and creating.";

        messageButton.textContent = "Message Shown";
    });
}

// =========================
// Contact Form Validation
// =========================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const subjectError = document.querySelector("#subjectError");
    const messageError = document.querySelector("#messageError");
    const formSuccess = document.querySelector("#formSuccess");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailInput.validity.valid) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (subjectInput.value.trim() === "") {
            subjectError.textContent = "Please enter a subject.";
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        if (isValid) {
            formSuccess.textContent =
                "Thank you! Your message has been submitted successfully.";

            contactForm.reset();
        }
    });

    nameInput.addEventListener("input", function () {
        nameError.textContent = "";
    });

    emailInput.addEventListener("input", function () {
        emailError.textContent = "";
    });

    subjectInput.addEventListener("input", function () {
        subjectError.textContent = "";
    });

    messageInput.addEventListener("input", function () {
        messageError.textContent = "";
    });
}
