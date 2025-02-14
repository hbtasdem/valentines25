// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");
    const buttons = document.getElementById("buttons");

    // Initially, show the buttons after a delay to simulate the "envelope opening"
    setTimeout(() => {
        buttons.style.display = "block";
    }, 2000); // 2 seconds delay for the envelope to open

    // When the "Yes" button is clicked
    yesBtn.addEventListener("click", () => {
        // Shrink the "Yes" button in a loop
        let scale = 1;
        const shrinkInterval = setInterval(() => {
            if (scale > 0.5) {
                scale -= 0.02; // Shrink by 5% each interval
                yesBtn.style.transform = `scale(${scale})`;
            } else {
                clearInterval(shrinkInterval); // Stop shrinking when it gets too small
            }
        }, 100); // Shrink every 100ms

        // Make the "No" button bigger when "Yes" is clicked
        noBtn.style.transform = "scale(1.5)"; // Make "No" button bigger
    });

    // When the "No" button is clicked
    noBtn.addEventListener("click", () => {
        message.textContent = "Can I call you mine?"; // Change the message text
        buttons.style.display = "none"; // Hide the buttons
        // You can add more fun animations or effects here!
        document.body.style.background = "linear-gradient(#f3d0e6, #ffffff)";
    });
});
