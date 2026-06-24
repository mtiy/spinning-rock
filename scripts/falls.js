// Grab our continue button
const continueButton = document.getElementById("continueButton");

// Grab our text areas
const storyText = document.querySelector(".storyText");
const gameplayText = document.querySelector(".gameplayText");

// Grab our snakes
const snakeContainer = document.querySelector(".snakeContainer");
const snakeArray = document.querySelectorAll(".snake")

// A variable just to determine when we finish clicking snakes
let snakeCounter = 0;

// Our big red button
const bigRedButtonContainer = document.querySelector(".bigButtonHidden");
const bigRedButton = document.getElementById("bigRedButton");

// Add a click event to it to fade out text and fade in new instructions and snakes
continueButton.addEventListener("click", () => {
    continueButton.hidden = true;
    storyText.classList.add("fade-out");
    snakeContainer.classList.add("snake-fade-in");
    gameplayText.classList.add("fade-in");
});

// Add translations to each snake
for(i of snakeArray){
    let snakeBoi = i;
    snakeBoi.addEventListener("click", function snakeMove(){
        snakeBoi.classList.add("snake-move");
        snakeCounter++;

        // When all snakes are gone, display new text and button
        if(snakeCounter >= 4){
            storyText.textContent = "With the Control Room free of snakes, you see a button on the console.";
            storyText.classList.remove("fade-out");
            storyText.classList.add("fade-in");
            gameplayText.classList.add("fade-out");

            bigRedButtonContainer.classList.add("bigButtonContainer");
        }

        snakeBoi.removeEventListener("click", snakeMove);
    });
}

bigRedButton.addEventListener("click", () => {
    bigRedButton.hidden = true;
    let a = document.createElement("a");
    let linkText = document.createTextNode("Return");
    a.appendChild(linkText);
    a.href = "../index.html";
    storyText.textContent = "The lights flicker on as the dam roars to life. The turbines begin to spin again, sending electricity to far off places. ";
    storyText.append(a);
});

