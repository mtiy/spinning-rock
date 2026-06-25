// Our container for our button puzzle
const buttonGrid = document.querySelector(".buttonGrid");

// Create our back anchor
back("ancient-forest.html");

// Assign our puzzle buttons to an array
const puzzleButtonArr = document.querySelectorAll(".puzzleButton");

let buttonsPressed = 0;

// Add click event to each button, doing this hard coded for now (1, 5, 4, 2, 3)
puzzleButtonArr[0].addEventListener("click", () => {
    puzzleButtonArr[0].classList.add("button-on");
    buttonsPressed++;
});

puzzleButtonArr[1].addEventListener("click", () => {
    buttonRule(2, 1);
    checkStatus();
});

puzzleButtonArr[2].addEventListener("click", () => {
    buttonRule(4, 2);
});

puzzleButtonArr[3].addEventListener("click", () => {
    buttonRule(0, 3);
});

puzzleButtonArr[4].addEventListener("click", () => {
    buttonRule(3, 4);
});

// Function that takes care of conditional statement
function buttonRule(previous, current){
    if(puzzleButtonArr[previous].classList.contains("button-on")){
        puzzleButtonArr[current].classList.add("button-on");
        buttonsPressed++;
    } else {
        resetButtons();
    }
}

// Function that resets all buttons
function resetButtons(){
    buttonsPressed = 0;
    for(i of puzzleButtonArr) {
        i.classList.remove("button-on");
    }
}

// Checks if all buttons are pushed down and advances story if they are
function checkStatus(){
    if(buttonsPressed >= 5){
        let a = createAnchor("../index.html", mainText)
        storyText.textContent = "The blade whirs to life, spinning impossibly fast! It must be for cutting these trees. Indeed, you see a stack of planks nearby…";
        storyText.append(a);
        gameplayText.classList.remove("fade-in");
        gameplayText.classList.add("fade-out");
        storyText.classList.remove("fade-out");
        storyText.classList.add("fade-in");
        buttonGrid.classList.remove("fade-in-button-grid")
        removeLocation("ancientForest");
    }
}

// Continue button
continueButton.addEventListener("click", () => {
    cont();
    buttonGrid.classList.add("fade-in-button-grid");
});