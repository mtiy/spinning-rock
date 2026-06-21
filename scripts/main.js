// Div containing our wheel image that we will rotate with CSS
const wheelContainer = document.getElementById("wheelContainer");

// Button that will spin the wheel when pressed
const spinWheelButton = document.getElementById("spinWheelButton");
spinWheelButton.addEventListener("click", spinToWin);

// Array of possible locations
const locArray = [
    "abandonedCity",
    "midnightFields",
    "snowyMountain",
    "silentDesert",
    "ancientForest",
    "theFalls",
    "shipDock",
    "shimmeringLake"
]

// Calculate a random result and spin the wheel and then display the result.
function spinToWin(){
    let randNum = Math.floor(Math.random() * locArray.length);

    spinWheelButton.disabled = true;

    wheelContainer.classList.add("spinning-" + locArray[randNum]);

    setTimeout(() => {
        document.getElementById(locArray[randNum]).hidden = false;
    }, 10000);
}