
document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chatForm");
    const userInput = document.getElementById("userInput");
    const chatMessages = document.getElementById("chatMessages");
    const suggestions = document.querySelectorAll(".suggestion");

    if (!chatForm || !userInput || !chatMessages) return;

    function addMessage(text, sender) {
        const message = document.createElement("div");
        message.classList.add("message", sender + "-message");

        const icon = document.createElement("div");
        icon.classList.add("message-icon");

        const iconElement = document.createElement("i");
        iconElement.className = sender === "user"
            ? "fa-solid fa-user"
            : "fa-solid fa-robot";

        icon.appendChild(iconElement);

        const content = document.createElement("div");
        content.classList.add("message-content");
        content.textContent = text;

        message.appendChild(icon);
        message.appendChild(content);
        chatMessages.appendChild(message);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getResponse(question) {
        const q = question.toLowerCase();

        if (q.includes("emergency") || q.includes("112") ||
            q.includes("police") || q.includes("ambulance") ||
            q.includes("fire service")) {
            return "In India, call 112 for emergency assistance. "
                + "Tell the operator what happened, your location, "
                + "and what kind of help you need.";
        }

        if (q.includes("fire")) {
            return "If there is a fire, leave the building using a safe "
                + "exit. Do not use lifts. Stay low if there is smoke, "
                + "and call 112 from a safe location.";
        }

        if (q.includes("bleeding") || q.includes("injured") ||
            q.includes("first aid")) {
            return "For serious injuries, call 112. For severe bleeding, "
                + "apply firm, continuous pressure with a clean cloth "
                + "or dressing. Follow the emergency operator's guidance.";
        }

        if (q.includes("burn")) {
            return "For a thermal burn, cool the area under cool running "
                + "water. Do not apply ice, butter, or toothpaste. "
                + "Seek medical care for serious burns.";
        }

        if (q.includes("women") || q.includes("woman")) {
            return "In India, call 112 for immediate danger. "
                + "The women helpline 181 is also available in many "
                + "areas. Availability may vary by state.";
        }

        if (q.includes("child")) {
            return "In India, Child Helpline 1098 provides support "
                + "for children in need of care and protection. "
                + "For immediate danger, call 112.";
        }

        if (q.includes("cyber") || q.includes("online fraud") ||
            q.includes("scam")) {
            return "For cybercrime-related complaints in India, use "
                + "the official cybercrime reporting portal. For "
                + "financial cyber fraud, call 1930 promptly.";
        }

        if (q.includes("accident")) {
            return "Move to a safe place if possible. Call 112 and "
                + "give the operator your location and details. "
                + "Avoid moving seriously injured people unless "
                + "there is immediate danger.";
        }

        if (q.includes("hello") || q.includes("hi") ||
            q.includes("hey")) {
            return "Hello! You can ask me about emergency numbers, "
                + "fire safety, first aid, or basic emergency guidance.";
        }

        if (q.includes("thank")) {
            return "You're welcome. Stay safe!";
        }

        return "I can help with basic questions about emergency "
            + "numbers, fire safety, first aid, and helplines. "
            + "Try asking a more specific question. "
            + "For immediate danger in India, call 112.";
    }

    function handleQuestion(question) {
        const cleanedQuestion = question.trim();

        if (!cleanedQuestion) return;

        addMessage(cleanedQuestion, "user");

        userInput.value = "";

        const response = getResponse(cleanedQuestion);

        setTimeout(function () {
            addMessage(response, "bot");
        }, 400);
    }

    chatForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleQuestion(userInput.value);
    });

    suggestions.forEach(function (button) {
        button.addEventListener("click", function () {
            handleQuestion(button.dataset.question);
        });
    });
});