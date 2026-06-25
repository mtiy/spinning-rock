// Very simple inventory
let inventory = {
    locket: false,
    coin: false
}

// Create our final text with added link
let a = createAnchor("../index.html", mainText);

// We need an object for storing our text
const textObject = {
    start: {
        text: "You step aboard the boat, holding the railing to steady yourself as it sways back and forth. As you stand on the deck you see...",
        options: [{name: "hatch", text: "A hatch leading below deck"}, {name: "quarters", text: "A door to the captain's quarters"}]
    },
    hatch: {
        text: "You make your way down the stairs. Water has leaked into the lower deck, soaking through beds and personal belongings. As you wade through the water you see a dark room in the corner, and a glimmer in the water.",
        options: [{name: "room", text: "A dark room"}, {name: "water", text: "A glimmer in the water"}, {name: "deck", text: "Back Above Deck"}]
    },
    quarters: {
        text: "The quarters are a mess, clothes and papers strewn over the bed and floors. Under the bed you see a box.",
        options: [{name: "box", text: "Box"}, {name: "deck", text: "Back outside"}]
    },
    room: {
        text: "You feel your way through the darkness. Finally, your hands land on a heart shaped locket. You take it with you.",
        options: [{name: "hatch", text: "Hatch"}],
        item: function locketGet(){
            inventory.locket = true;
            textObject.hatch.options.shift();
            if(inventory.locket && inventory.coin){
                textObject.deck.options.shift();
            }
        }
    },
    water: {
        text: "You reach down into the cool water. When you bring your hand back up, a silver coin rests in your palm.",
        options: [{name: "hatch", text: "Hatch"}],
        item: function coinGet(){
            inventory.coin = true;
            if(inventory.locket){
                textObject.hatch.options.shift();
            } else {
                textObject.hatch.options.splice(1, 1);
            }
            if(inventory.locket && inventory.coin){
                textObject.deck.options.shift();
            }
        }
    },
    box: {
        text: "The box has intricate gold designs embedded in it. On the top are two slots, one heart shaped and one circular.",
        options: [{name: "quarters", text: "Quarters"}],
        item: function checkInv(){
            if(inventory.locket && inventory.coin){
                textObject.box.options.push({name: "end", text: "Place Locket and Coin"});
            }
        }
    },
    deck: {
        text: "You return to the deck. You see...",
        options: [{name: "hatch", text: "A hatch leading below deck"}, {name: "quarters", text: "A door to the captain's quarters"}]
    },
    end: {
        text: "Upon placing the locket and coin in the grooves, the box clicks open. The inside is lined with green velvet, and a small figure pops up in the center and begins to spin. You hear a melody come from the box, haunting and sweet. ",
        item: function end(){
            storyText.append(a);
            removeLocation("shipDock");
        }
    }
}

// Our button container where we display options
const buttonContainer = document.querySelector(".buttonContainer");

// Create our back button
back("ship-dock.html");

// Initialize our story
storyText.textContent = textObject.start.text;
showOptions(textObject.start.options);

// Create our buttons for navigating the textObject
function createButtons(buttonName, buttonText){
    let btn = document.createElement("button");
    btn.textContent = buttonText;
    btn.classList.add("senseButton");
    btn.id = buttonName;

   btn.addEventListener("click", function goToNext(){
        let nextText = textObject[this.id].text;
        storyText.textContent = nextText;
        textObject[this.id].item ? textObject[this.id].item() : console.log("No method attached");
        
        showOptions(textObject[this.id].options);
   });

    buttonContainer.append(btn);
}

// Generate and display buttons with options
function showOptions(optionArr){
    const previousOptions = buttonContainer.querySelectorAll(".senseButton");
    for(i of previousOptions){
        i.remove();
    }

    for(i of optionArr){
        createButtons(i.name, i.text);
    }
}