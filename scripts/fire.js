// Get stick and campfire
const stick = document.getElementById("stick");
const campfireUnlit = document.getElementById("campfireUnlit");
const fireContainer = document.querySelector(".fire-stick");
const campfireLit = document.getElementById("campfireLit");

// Make our back button
back("snowy-mountain.html");

// Get our progress bar
const progressBar = document.querySelector("progress");
const label = document.querySelector("label");

// Have continue button display our minigame
continueButton.addEventListener("click", () => {
    cont();
    fireContainer.classList.add("fire-fade-in");
});

stick.addEventListener("click", function stickTransform(){
    if(this.classList.contains("flip-horizontal")){
        this.classList.remove("flip-horizontal");
        this.classList.add("flip-horizontal-reverse");
    } else {
        this.classList.remove("flip-horizontal-reverse");
        this.classList.add("flip-horizontal");
    }

    progressBar.value++;
    if(progressBar.value >= progressBar.max){
        displayFinalText();
    }
});

function displayFinalText(){
    campfireLit.hidden = false;
    campfireUnlit.hidden = true;
    stick.hidden = true;
    label.hidden = true;
    gameplayText.classList.remove("fade-in");
    gameplayText.classList.add("fade-out");
    let a = createAnchor("../index.html", mainText)
    storyText.textContent = "Warmth radiates through you. The fire dances and crackles. ";
    storyText.append(a);
    storyText.classList.remove("fade-out");
    storyText.classList.add("fade-in");
    removeLocation("snowyMountain");
    
}