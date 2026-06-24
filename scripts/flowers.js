// Get continue button
const continueButton = document.getElementById("continueButton");

// Grab our text areas
const storyText = document.querySelector(".storyText");
const gameplayText = document.querySelector(".gameplayText");

// Flower field container
const flowerGridContainer = document.querySelector(".flower-grid");

// Continue button fades out text and brings up field
continueButton.addEventListener("click", () => {
    continueButton.hidden = true;
    storyText.classList.add("fade-out");
    gameplayText.classList.add("fade-in");
});

/* 
Randomly generate a grid of symbols, with some colorful flowers placed
colLength rowLength defines how many characters to generate
key is an array of strings containing symbols to use in our grid
flower will contain the flower colors in an array
*/
function generateFlowerGrid(colLength, rowLength, key, flowers){


    let flowerLocations = [4, 10, 14, 27, 50];
    let counter = 0;

    for(i=0; i < colLength; i++){
        let div = document.createElement("div");
        for(j=0; j < rowLength; j++){
            if(flowerLocations.includes(counter)){
                let span = document.createElement("span");
                span.append("f");
                span.style.color = "red";
                div.append(span);
            } else {
                let randNum = Math.floor(Math.random() * key.length);
                let char = key[randNum];
                div.append(char);
            }
            counter++;
        }
        flowerGridContainer.append(div);
    }
    console.log(counter);
}




storyText.hidden = true;

generateFlowerGrid(10, 10, ["#", "d", "g", "r"], ["red", "green", "blue", "yellow", "purple"]);
