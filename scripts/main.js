// Div containing our wheel image that we will rotate with CSS
const wheelContainer = document.getElementById("wheelContainer");

// Button that will spin the wheel when pressed
const spinWheelButton = document.getElementById("spinWheelButton");
spinWheelButton.addEventListener("click", spinToWin);

// Object for storing things I want to use between pages, saved using localStorage
let playerObj = {
    locations: [
        //"abandonedCity",
       // "midnightFields",
        //"snowyMountain",
        //"silentDesert",
        "ancientForest",
        "theFalls",
        //"shipDock",
        "shimmeringLake"
    ]
}

// Calculate a random result and spin the wheel and then display the result.
function spinToWin(){
    let randNum = Math.floor(Math.random() * playerObj.locations.length);

    spinWheelButton.disabled = true;

    wheelContainer.classList.add("spinning-" + playerObj.locations[randNum]);

    setTimeout(() => {
        document.getElementById(playerObj.locations[randNum]).hidden = false;
    }, 10000);
}