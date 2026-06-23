// Grab our continue button
const continueButton = document.getElementById("continueButton");

// Grab our text areas
const storyText = document.querySelector(".storyText");
const gameplayText = document.querySelector(".gameplayText");

// Assign our puzzle buttons to an array
const puzzleButtonArr = document.querySelectorAll(".puzzleButton");

// Add a click event to continue button to fade out text and fade in new instructions
continueButton.addEventListener("click", () => {
    continueButton.hidden = true;
    storyText.classList.add("fade-out");
    storyText.classList.remove("fade-in");
    gameplayText.classList.add("fade-in");
});

// We need to loop through each button assigning it an event

for(i of puzzleButtonArr){

}
