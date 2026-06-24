// A list of all our sense buttons (5 total)
const senseButtons = document.querySelectorAll(".senseButton");

// A list of all our sense text
const senseText = document.querySelectorAll(".senseText");

// Index in senseButtons indicating the last button pressed.
let lastIndex = 0;

// This function sets up the senses buttons
for(i=0; i < senseButtons.length; i++){
    let index = i;

    senseButtons[index].addEventListener("click", () => {

        if(senseText[lastIndex].classList[1] === "fade-in"){
            senseText[lastIndex].classList.remove("fade-in");
            senseText[lastIndex].classList.add("fade-out");
        } 

        senseText[index].classList.remove("fade-out");
        senseText[index].classList.add("fade-in");

        lastIndex = index;
    });
}