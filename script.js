// JavaScript for the Rock Paper Scissors game

// Computer will make a selection for its play (rock, paper, or scissors - random)
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if (randomChoice === 1) {
        return computerChoice = "rock";
    } else if (randomChoice === 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}
console.log(getComputerChoice());
// User will make a selection for their play
// Determine who won the round
// Tally the score
// Report the winner and loser at the end of all rounds