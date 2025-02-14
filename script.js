const envelope = document.getElementById("envelope");
const buttons = document.getElementById("buttons");
const message = document.getElementById("message");

envelope.addEventListener("click", () => {
    // Trigger the animation by adding the 'opened' class
    envelope.parentElement.classList.add("opened");

    // Show the buttons after animation is complete
    setTimeout(() => {
        buttons.style.display = "block"; // Show buttons
        message.textContent = "Do you have a name?";
    }, 1200); // Wait for the envelope opening to finish before showing buttons
});

// Add button event listeners
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    // Make No button larger
    noBtn.style.transform = "scale(1.5)";
});

noBtn.addEventListener("click", () => {
    message.textContent = "Can I call you mine?"; // Change the message
    yesBtn.style.display = "none"; // Hide the Yes button
    noBtn.style.display = "none"; // Hide the No button
});
