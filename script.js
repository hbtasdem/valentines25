const envelope = document.getElementById("envelope");
const card = document.querySelector(".card");
const buttons = document.getElementById("buttons");
const message = document.getElementById("message");



card.addEventListener("click", () => {
    // Trigger the animation by adding the 'opened' class
    card.parentElement.classList.add("opened");

    // Show the buttons after animation is complete
    setTimeout(() => {
        buttons.style.display = "block"; // Show buttons
    }, 200); // Wait for the envelope opening to finish before showing buttons
});

// Add button event listeners
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {

    // noBtn.style.transform = "scale(1.2)";
    // yesBtn.style.transform = "scale(0.8)";

    let scale = 1;
        const shrinkInterval = setInterval(() => {
            if (scale > 0.8) {
                scale -= 0.05; // Shrink by 5% each interval
                yesBtn.style.transform = `scale(${scale})`;
            } else {
                clearInterval(shrinkInterval); // Stop shrinking when it gets too small
            }
        }, 100); // Shrink every 100ms

        // Make the "No" button bigger when "Yes" is clicked
        noBtn.style.transform = "scale(1.2)"; // Make "No" button bigger
        
});

noBtn.addEventListener("click", () => {
    
    message.textContent = "Can I call you mine?"; // Change message immediately

    // Make the buttons disappear after message change (no timer)
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Background stays the same
    document.body.style.background = "linear-gradient(#f3d0e6, #ffffff)";

});


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = ["❤️", "💖", "💘", "💗", "💓", "💕"][Math.floor(Math.random() * 6)]; // Random heart
    document.body.appendChild(heart);

    // Random position
    const x = Math.random() * window.innerWidth;
    const size = Math.random() * 20 + 10; // Size between 10px and 30px
    const duration = Math.random() * 2 + 2; // 2s to 4s animation time

    heart.style.left = `${x}px`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Call this function multiple times when "No" is clicked
noBtn.addEventListener("click", () => {
    message.textContent = "Can I call you mine?"; // Update message
    buttons.style.display = "none"; // Hide buttons

    // Create heart confetti effect
    setInterval(createHeart, 200); // Creates a heart every 200ms
    
    setTimeout(() => {
        clearInterval(createHeart); // Stops after 5 seconds
    }, 5000);
});