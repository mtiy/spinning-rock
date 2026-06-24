// Grab our continue button (this should probably be a global function, huh?)
const continueButton = document.getElementById("continueButton");
const retryButton = document.getElementById("retryButton");

// Grab our story text (this should also probably be used between pages, huh?)
const storyText = document.querySelector(".storyText");
const gameplayText = document.querySelector(".gameplayText");

// Grab our two options containers (stone, angle)
const stoneContainer = document.querySelector(".stoneContainer");
const angleContainer = document.querySelector(".angleContainer");

// Grab our stones
const stones = document.querySelectorAll(".stone");
const angles = document.querySelectorAll(".angle");

// Make our continue button fade out the story text and display our next window
continueButton.addEventListener("click", () => {
    continueButton.hidden = true;
    storyText.classList.add("fade-out");
    stoneContainer.classList.add("stone-fade-in");
    gameplayText.classList.add("fade-in");
});

retryButton.addEventListener("click", () => {
    retryButton.hidden = true;
    storyText.classList.remove("fade-in");
    storyText.classList.add("fade-out");
    stoneAngleObj.stone = "";
    stoneAngleObj.angle = 0;
    stoneAngleObj.correctState = 0;
    stoneContainer.classList.add("stone-fade-in");
    gameplayText.textContent = "Choose your stone";
    gameplayText.classList.add("fade-in");
});

// Object representing the player's choices
let stoneAngleObj = {
    stone: "",
    angle: 0,
    correctState: 0    // correctState is how many correct choices the player made. Must be 2 to succeed
}

// Assigning a click event to each stone image. We update our object with the id and if it was a correct choice
for(i=0; i < stones.length; i++){
    let info = [];

    if(stones[i].id === "oval" || stones[i].id === "curved"){
        info.push(1);
    } else {
        info.push(0);
    }

    info.push(stones[i].id);

    stones[i].addEventListener("click", () => {
        stoneAngleObj.correctState += info[0];
        stoneAngleObj.stone = info[1];

        stoneContainer.classList.remove("stone-fade-in");
        angleContainer.classList.add("angle-fade-in");
        gameplayText.textContent = "Choose your throwing angle";
    });
}

// Here we assign a click even to each angle in a similar fashion, but we have an extra function to calculate what happens!
for(i=0; i < angles.length; i++){
    let info = [];

    if(angles[i].id === "20"){
        info.push(1);
    } else {
        info.push(0);
    }

    info.push(Number(angles[i].id));

    angles[i].addEventListener("click", () => {
        stoneAngleObj.correctState += info[0];
        stoneAngleObj.angle = info[1];

        angleContainer.classList.remove("angle-fade-in");
        gameplayText.classList.remove("fade-in");

        let resultText = decideSkip();
        storyText.textContent = resultText;

        if(stoneAngleObj.correctState === 2){
            let a = document.createElement("a");
            let linkText = document.createTextNode("Return");
            a.appendChild(linkText);
            a.href = "../index.html";
            storyText.append(a);
        }

        storyText.classList.remove("fade-out");
        storyText.classList.add("fade-in");
        retryButton.hidden = false;
    });
}

// This function determines what happens based on our choices, with a couple different routes beyond pass/fail
function decideSkip(){

    // Wrong stone and angle
    if(stoneAngleObj.correctState === 0){
        if(stoneAngleObj.angle > 65){
            let text = "You somehow throw the stone at an impossible angle. It crashes into the water uselessly.";
            return text;
        } else {
            let text = "The stone hits the water and sinks. So sad.";
            return text;
        }
    }

    // Either stone or angle correct
    if(stoneAngleObj.correctState === 1){
        if(stoneAngleObj.angle > 65){
            let text = "You somehow throw the stone at an impossible angle. It skips right at you and smacks you in the face. Ouch!";
            return text;
        } else if(stoneAngleObj.stone === "porous" || stoneAngleObj.stone === "bulky"){
            let text = "The stone plops into the water where you throw it.";
            return text;
        } else {
            let text = "The stone skips a few times, but nothing too impressive.";
            return text;
        }
    }

    // Both are correct, you win!
    if(stoneAngleObj.correctState === 2){
        let text = "The stone glides across the water, spinning as it skips. Finally, it hits the shore of the small island and comes to rest. ";
        return text;
    }
}