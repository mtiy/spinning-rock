// A list of all our sense buttons (5 total)
const senseButtons = document.querySelectorAll(".senseButton");

// A list of all our sense text
const senseText = document.querySelectorAll(".senseText");

// Link back to main menu container
const returnContainer = document.querySelector(".link-container")

// Index in senseButtons indicating the last button pressed.
let lastIndex = 0;

// This loop sets up the senses buttons
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

// Return to wheel from senses screen if you're done
function checkFinish(locationString){
    if(!playerObj.locations.includes(locationString)){
        let a = createAnchor("../index.html", mainText);
        returnContainer.append(a);
    }
}
// Append a link to the main menu if completed already
checkFinish(returnContainer.id);