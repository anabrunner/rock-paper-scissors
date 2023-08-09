// JavaScript for the Rock Paper Scissors game

// Computer will make a selection for its play (rock, paper, or scissors - random)
// Computer choice is simply an integer between 1 and 3. Each integer will correspond to a choice of rock, paper, or scissors.
// Rock = 1, Paper = 2, Scissors = 3
let computerChoice = Math.floor(Math.random() * 3) + 1;

console.log(computerChoice);

// User will make a selection for their play. Text will be input into a prompt and converted to an integer corresponding to the choice.
// This is similar to the computer choice above.
function getPlayerSelection() {
    let playerSelection = prompt("Choose your weapon: rock, paper, or scissors?");
    playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        return 1;
    } else if (playerSelection === "paper") {
        return 2;
    } else if (playerSelection === "scissors") {
        return 3;
    } else {
        alert("Please enter a valid weapon!");
    }
}

// Determine who won the round
function getWinner(computerChoice, playerChoice) {
    let result;
    if (computerChoice === playerChoice) {
        return result = "It's a draw!";
    } else if ((computerChoice === 1 && playerChoice === 3) || (computerChoice > playerChoice)) {
        return result = "You have lost this round!";
    } else {
        return result = "You have won this round!";
    }
}

console.log(getWinner(computerChoice, getPlayerSelection()));

// Tally the score
// Report the winner and loser at the end of all rounds