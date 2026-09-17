
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (!contactForm || !formMessage) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formMessage.textContent =
            "Thank you! Your demo form was submitted successfully. "
            + "No information was actually sent or stored.";

        contactForm.reset();
    });
});