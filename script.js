// Played in the console
let computerSelection = "";

function computerPlay() {
randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber == 1) {
    computerSelection = "Rock";
} else if (randomNumber == 2) {
    computerSelection = "Paper";
} else {
    computerSelection = "Scissors";
}
return computerSelection;
}

computerPlay();
