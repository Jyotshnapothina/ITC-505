
const story = {
    intro: {
        text: "You wake up on a mysterious island with no memory of how you got there. Now you to need to find a way to go back to your home..!",
        choices: ["Explore the beach", "Venture into the jungle"],
        consequence: ["beach", "jungle"],
        image: "intro.jpg"
    },
    beach: {
        text: "You decide to explore the beach and notice a dolphin and a bottle with a message inside it.",
        choices: ["Open the message in the bottle", "Play with the dolphin"],
        consequence: ["message", "dolphin"],
        image: "beach.jpg"
    },
    message: {
        text: "You found a map to the destiny in the bottle and a board showing beware of the predator",
        choices: ["Follow the map", "Beware of the predator"],
        consequence: ["treasure", "predator"],
        image: "message.jpg"
    },
    dolphin: {
        text: "You play with the friendly dolphin. And you can ask dolphin for help for continue your way",
        choices: ["Ask the dolphin for help", "Continue going"],
        consequence: ["help", "continue"],
        image: "dolphin.jpg"
    },
    help: {
        text: "The dolphin guides you through the sea safely and you reach home or you ",
        choices: ["Return home", "Explore more of the island"],
        consequence: ["home", "explore"],
        image: "help.jpg"
    },
    continue:{
        text: "While continuing in your path, you come across a tiger.",
        choices: ["Try to fight it", "Run for your life"],
        consequence: ["death", "destiny"],
        image: "help1.jpg"
    },

    jungle: {
        text: "You chose to venture into the jungle and find a hidden cave and a group of natives",
        choices: ["Enter the hidden cave", "Approach the natives"],
        consequence: ["cave", "natives"],
        image: "jungle.jpg"
    },
    cave: {
        text: "You entered a hidden cave and search for artifacts or watch out if there are any predators ",
        choices: ["Search for artifacts", "Watch out for predators"],
        consequence: ["artifacts", "predators"],
        image: "cave.jpg"
    },
    predators: {
        text: "You encounter a  group of wolves and decides to either fight or run for your life",
        choices: ["Try to fight them off", "Run for your life"],
        consequence: ["death", "destiny"],
        image: "predators.jpg"
    },
    natives: {
        text: "You encounter friendly natives and ask for a help.",
        choices: [ "Ask for guidance", "Continue going"],
        consequence: ["destiny", "continue"],
        image: "natives.jpg"
    },
    treasure: {
        text: "You followed the map and found the treasure!",
        choices: [],
        consequence: [],
        image: "treasure.jpg",
        
    },
    artifacts: {
        text: "You found ancient artifacts in the cave! Collect them and follow the destination board",
        choices: ["Reach destiny"],
        consequence: ["destiny"],
        image: "artifacts.jpg"
    },
    pirates: {
        text: "You triggered a trap and got captured by pirates!",
        choices: ["Continue exploring", "Head towards the destiny"],
        consequence: ["continue", "destiny"],
        image: "pirates.jpg"
    },
    
    
    destiny: {
        text: "Congratulations! You have reached your destiny!",
        choices: [],
        consequence: [],
        image: "destiny.jpg"
    },
    home: {
        text: "You safely returned home!",
        choices: [],
        consequence: [],
        image: "home.jpg"
    },
    explore: {
        text: "You decide to explore more of the island...",
        choices: [],
        consequence: [],
        image: "explore.jpg"
    },
    death: {
        text: "You have met an unfortunate end...",
        choices: [],
        consequence: [],
        image: "death.jpg"
    }
};


function startGame() {
    currentStage = "intro";
    updatePage();
}


function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story").textContent = stage.text;
    document.getElementById("choices").innerHTML = ""; 

    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            currentStage = stage.consequence[index];
            if (currentStage === "destiny" || currentStage === "death" || currentStage === "home" || currentStage === "explore") {
                endGame();
            } else {
                updatePage();
            }
        });
        document.getElementById("choices").appendChild(button);
    });

    document.getElementById("image").innerHTML = `<img src="image/${stage.image}" alt="Image">`;
}

function endGame() {
    const stage = story[currentStage];
    document.getElementById("story").textContent = stage.text;
    document.getElementById("choices").innerHTML = ""; 
    document.getElementById("image").innerHTML = `<img src="image/${stage.image}" alt="Image">`;

   
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", startGame); 
    document.getElementById("choices").appendChild(restartButton);
}

let currentStage;
startGame();
