// A list of all our sense buttons (5 total)
const senseButtons = document.querySelectorAll(".senseButton");

// A list of all our sense text
const senseTexts = document.querySelectorAll(".senseText");

// 
for(i=0; i < senseButtons.length; i++){
    let index = i;
    senseButtons[index].addEventListener("click", () => {
        senseTexts[index].classList.add("fade-in");
    })
}