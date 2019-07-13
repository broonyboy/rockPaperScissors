// Played in the console
let computerSelection = "";

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerSelection = "rock";
    } else if (randomNumber == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    console.log("Computer Selection : " + computerSelection);
    return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt('Please make your selection (rock, paper or scissors');
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("Invalid Choice - Try again");
        playerSelection = "";
        playerPlay();
    }
    console.log("Player Selection :" + playerSelection);
    return playerSelection;
}

function singleRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "The result is a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win ! Rock beats Scissors";
        } else {
            return "You Lose! Paper beats Rock.";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock.";
        } else {
            return "You Lose! Scissors beats Paper.";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper.";
        } else {
            return "You Lose! Rock beats Scissors.";
        }
    }
}

console.log(singleRound(playerPlay(), computerPlay()));

