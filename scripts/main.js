// Div containing our wheel image that we will rotate with CSS
const wheelContainer = document.getElementById("wheelContainer");

// Button that will spin the wheel when pressed
const spinWheelButton = document.getElementById("spinWheelButton");
spinWheelButton.addEventListener("click", spinToWin);

// Calculate a random result and spin the wheel and then display the result.
function spinToWin(){
    let randNum = Math.floor(Math.random() * playerObj.locations.length);

    spinWheelButton.hidden = true;

    wheelContainer.classList.add("spinning-" + playerObj.locations[randNum]);

    setTimeout(() => {
        document.getElementById(playerObj.locations[randNum]).hidden = false;
    }, 10000);
}

console.log(playerObj.locations);