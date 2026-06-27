// Div containing our wheel image that we will rotate with CSS
const wheelContainer = document.getElementById("wheelContainer");

const endgameTextContainer = document.querySelector(".endgame-text");

// Button that will spin the wheel when pressed
const spinWheelButton = document.getElementById("spinWheelButton");
spinWheelButton.addEventListener("click", spinToWin);

// Calculate a random result and spin the wheel and then display the result.
function spinToWin(){
    if(playerObj.locations.length === 0){
        spinWheelButton.hidden = true;
        wheelContainer.classList.add("spinning-win");
        setTimeout(()=>{
            document.body.classList.add("full-fade-out");
            setTimeout(() => {
                endGame();
                document.body.classList.remove("full-fade-out");
            }, 15000);
        }, 10000);
        return;
    }


    let randNum = Math.floor(Math.random() * playerObj.locations.length);

    spinWheelButton.hidden = true;

    wheelContainer.classList.add("spinning-" + playerObj.locations[randNum]);

    setTimeout(() => {
        document.getElementById(playerObj.locations[randNum]).hidden = false;
    }, 10000);
}

function endGame(){
    const wrappers = document.querySelectorAll(".wrapper");
    for(i of wrappers){
        i.remove();
    }

    let restartButton = document.createElement("button");
    restartButton.classList.add("restartButton");
    restartButton.textContent = "Play Again";
    restartButton.addEventListener("click", () => {
        localStorage.clear();
        window.location.reload();
    });

    endgameTextContainer.append(restartButton);

    endgameTextContainer.classList.add("endgame-text-fade");
}
