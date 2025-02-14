function showMessage(isYes) {
    let message = document.getElementById("message");
    if (isYes) {
        message.textContent = "Yay! You made my day! 💕";
    } else {
        message.textContent = "Oh no! Maybe next time? 😢";
    }
    message.classList.remove("hidden");
}