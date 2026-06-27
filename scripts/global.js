// Grab our continue and back buttons
const continueButton = document.getElementById("continueButton");
const backAnchor = document.getElementById("backAnchor");
const wrapperDiv = document.querySelector(".wrapper");

// Grab our text areas
const storyText = document.querySelector(".storyText");
const gameplayText = document.querySelector(".gameplayText");

// Our return text
const mainText = "Return to Wheel"

// Grab our buttons and add sound effect
let buttonClickUp = new Audio("../sounds/click.mp3");
// let buttonClickDown = new Audio("../sounds/click2.mp3");

const allButtons = document.querySelectorAll("button");
console.log(allButtons);
console.log(document.querySelectorAll("button"));
for(btn of allButtons){
    btn.addEventListener("click", () => {
        buttonClickUp.play();
    });
}

// Object for storing things I want to use between pages, saved using localStorage
let playerObj = {
    locations: [
        "abandonedCity",
        "midnightFields",
        "snowyMountain",
        "ancientForest",
        "theFalls",
        "shipDock",
        "shimmeringLake"
    ]
}

// Load in our player object
load();

// Create a generic function for our continue button
function cont(){
    continueButton.hidden = true;
    storyText.classList.add("fade-out");
    gameplayText.classList.add("fade-in");
}

// Create an anchor for our back button
function back(filePath){
    let backElement = createAnchor(filePath, "Go Back to Senses");
    let divEl = document.createElement("div");
    backElement.classList.add("back-anchor");
    divEl.append(backElement);
    divEl.classList.add("back-anchor-container");
    wrapperDiv.append(divEl);
}

/* 
Generic anchor creating function since we use that a lot
filePath is a string indicating where the anchor goes to
text is the inner text of the anchor
*/
function createAnchor(filePath, text){
    let a = document.createElement("a");
    let linkText = document.createTextNode(text);
    a.appendChild(linkText);
    a.href = filePath;
    return a;
}

// Creating save and load functions using localStorage
function save(obj){
    localStorage.clear();
    localStorage.setItem("spin-save", JSON.stringify(obj));
}

function load(){
    let state = JSON.parse(localStorage.getItem("spin-save"));
    playerObj.locations = state.locations;
}

// Updating player object when completing a puzzle
function removeLocation(loc){
    let x = playerObj.locations.indexOf(loc);
    let locationCopy = playerObj.locations.slice();
    playerObj.locations.splice(x, 1);
    save(playerObj);
}