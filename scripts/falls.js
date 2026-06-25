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
    cont();
    snakeContainer.classList.add("snake-fade-in");
});

// Create our back anchor
back("the-falls.html");

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
    let a = createAnchor("../index.html", mainText);
    storyText.textContent = "The lights flicker on as the dam roars to life. The turbines begin to spin again, sending electricity to far off places. ";
    storyText.append(a);
    removeLocation("theFalls");
});

