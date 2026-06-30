// Vars

// Container for our number output
const computerScreen = document.querySelector(".computerScreen");

// Container for our buttons which we'll populate with answers
const buttonContainer = document.querySelector(".buttonContainer");

// Array of arrays representing our number sequences
const sequences = [
    [1, 2, 3, 4, 5, 6],
    [1, 4, 9, 16, 25, 36],
    [1, 1, 2, 3, 5, 8],
    [2, 3, 5, 7, 11, 13],
    [1, 2, 4, 8, 16, 32],
    [0, 0, 0, 0, 0, 0]
];

// Similar array of answers
const answersArr = [
    [8, 90, 7, 1289],
    [37, 49, 800, "Five"],
    [13, 9, 1001, 2],
    ["What?", 15, 14, 17],
    [33, 64, 128, 48],
    ["0?", 0, "Zero", 1]
];

// An array of correct answers (yeah probably a better way of doing this than 3 arrays whatever)
const correctArr = [7, 49, 13, 17, 64, 1];

// Counter for going through our sequence
let counter = 0;

// Functions

// Create our continue button
continueButton.addEventListener("click", () => {
    cont();
    advanceState();
    computerScreen.classList.add("computer-fade-in");
    gameplayText.textContent = "Complete the sequence";
});

// Create our back button
back("abandoned-city.html");

/*
 Function that takes an array of answers and generates the buttons
 answers is an array of possible answers
 correctAnswer indicates which one is correct
 */
function createAnswerButtons(answers, correctAnswer){
    for(i=0; i < answers.length; i++){
        let isCorrect;
        if(answers[i] === correctAnswer){
            isCorrect = true;
        } else {
            isCorrect = false;
        }
        let btn = document.createElement("button");
        btn.textContent = answers[i];
        btn.classList.add("senseButton", "answer-button");
        btn.addEventListener("click", () => {
            buttonClick.play();
        });

        if(isCorrect){
            btn.addEventListener("click", () => {
                gameplayText.textContent = "Success: Answer is correct";
                const oldAnswers = document.querySelectorAll(".answer-button");
                for(i of oldAnswers){
                    i.remove();
                }
                advanceState();
            });

        } else {
            btn.addEventListener("click", () => {
                gameplayText.textContent = "Error: Answer not correct";
                counter = 0;
                const oldAnswers = document.querySelectorAll(".answer-button");
                for(i of oldAnswers){
                    i.remove();
                }
                advanceState();
            });
        }

        buttonContainer.append(btn);
    }
}

function advanceState(){
    if(counter >= 6){
        storyText.textContent = "As you enter the final number the computer displays a THANK YOU then the screen goes dark for a moment. It powers back on with a white screen and a spinning globe displayed in the center. After a few moments the screen goes dark again and a disk pops out of the computer. ";
        storyText.classList.remove("fade-out");
        storyText.classList.add("fade-in");
        gameplayText.classList.add("fade-out");
        computerScreen.classList.remove("computer-fade-in");
        let a = createAnchor("../index.html", mainText);
        storyText.append(a);
        removeLocation("abandonedCity");
        return;
    }

    computerScreen.textContent = String(sequences[counter]).replaceAll(",", "__");
    computerScreen.textContent += "__";
    createAnswerButtons(answersArr[counter], correctArr[counter]);
    counter++;
}