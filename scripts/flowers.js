// Flower field container
const flowerGridContainer = document.querySelector(".flower-grid");

// Flowers picked counter
let flowersPicked = 0;

// Create our back anchor
back("midnight-fields.html");

// Continue button fades out text and brings up field
continueButton.addEventListener("click", () => {
    cont();
    generateFlowerGrid(15, 15, ["#", "g"], ["red", "green", "cyan", "yellow", "purple"]);
    flowerGridContainer.classList.add("flower-grid-fade-in");
});

/* 
Randomly generate a grid of symbols, with some colorful flowers placed
colLength rowLength defines how many characters to generate
key is an array of strings containing symbols to use in our grid
flower will contain the flower colors in an array
*/
function generateFlowerGrid(colLength, rowLength, key, flowers){


    let flowerLocations = [54, 167, 153, 204, 5];
    let flowerIndex = 0;
    let counter = 0;

    for(i=0; i < colLength; i++){
        let div = document.createElement("div");
        for(j=0; j < rowLength; j++){
            if(flowerLocations.includes(counter)){
                let span = document.createElement("span");
                span.append("f");
                span.style.color = flowers[flowerIndex];
                span.classList.add("flower");

                span.addEventListener("click", function flowerClick(){
                    this.textContent = ".";
                    flowersPicked++;
                    if(flowersPicked >= flowers.length){
                        let a = createAnchor("../index.html", mainText)
                        storyText.textContent = "You hold the flowers in front of you, admiring their beauty. A gust of wind picks them up and they twirl away. ";
                        storyText.append(a);
                        flowerGridContainer.classList.remove("flower-grid-fade-in");
                        storyText.classList.remove("fade-out");
                        storyText.classList.add("fade-in");
                        gameplayText.classList.remove("fade-in");
                        removeLocation("midnightFields");
                    }
                });

                div.append(span);
                flowerIndex++;
            } else {
                let randNum = Math.floor(Math.random() * key.length);
                let char = key[randNum];
                div.append(char);
            }
            counter++;
        }
        flowerGridContainer.append(div);
    }
}

