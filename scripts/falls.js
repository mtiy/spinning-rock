// Grab our continue button
const continueButton = document.getElementById("continueButton");

// Grab our text areas
const storyText = document.querySelector(".storyText");
const gameplayText = document.querySelector(".gameplayText");

// Grab our snakes
const snakeContainer = document.querySelector(".snakeContainer");
const snakeArray = document.querySelectorAll(".snake")

// Add a click event to it to fade out text and fade in new instructions and snakes
continueButton.addEventListener("click", () => {
    continueButton.hidden = true;
    storyText.classList.add("fade-out");
    snakeContainer.classList.add("snake-fade-in");
    gameplayText.classList.add("fade-in");
});

// Add random translations to each snake