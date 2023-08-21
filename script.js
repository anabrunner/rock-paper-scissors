// JavaScript for the Rock Paper Scissors game

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound)
});

const restart = document.getElementById("restart");
restart.addEventListener("click", restartGame);

// Computer will make a selection for its play (rock, paper, or scissors - random)
// Computer choice is simply an integer between 1 and 3. Each integer will correspond to a choice of rock, paper, or scissors.
function getComputerSelection() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Plays a round. Checks winner, updates scores, and checks if game has reached the end.
function playRound() {
    let playerChoice = this.id;
    let computerChoice = getComputerSelection();
    let roundNumber = parseInt(document.getElementById("roundNumber").innerText);
    checkWinner(playerChoice, computerChoice);
    document.getElementById("roundNumber").textContent = roundNumber + 1;
    checkGameEnd(roundNumber, playerScore, computerScore);
    return;
}

//Checks who won the round and updates UI.
function checkWinner(playerChoice, computerChoice) {
    let playerScore = parseInt(document.getElementById("playerScore").innerText);
    let computerScore = parseInt(document.getElementById("computerScore").innerText);
    if (computerChoice === playerChoice) {
        document.getElementById("results").textContent = `Draw! Both chose ${playerChoice}!`;
    } else if (
            (computerChoice === "rock" && playerChoice === "paper") || 
            (computerChoice == "scissors" && playerChoice === "rock") || 
            (computerChoice === "paper" && playerChoice === "scissors")
    ) {
        document.getElementById("results").textContent = `You win: ${playerChoice} beats ${computerChoice}!`;
        document.getElementById("playerScore").textContent = playerScore + 1;
    } else {
        document.getElementById("results").textContent = `You lose: ${computerChoice} beats ${playerChoice}!`;
        document.getElementById("computerScore").textContent = computerScore + 1;
    }
}

//Checks if game has completed five rounds.
function checkGameEnd(roundNumber, playerScore, computerScore) {
    if (roundNumber < 5) {
        return;
    } else {
        document.getElementById("results").textContent = "GAME OVER";
        const buttons = document.querySelectorAll(".buttons button");
        buttons.forEach((button) => {
            button.style.display = "none";
        });
        if (playerScore > computerScore) {
            document.getElementById("finalResults").textContent = "You have won the battle!";
        } else if (computerScore > playerScore) {
            document.getElementById("finalResults").textContent = "You have died!";
        } else {
            document.getElementById("finalResults").textContent = "It's a draw! Perhaps a rematch?"
        }
        document.getElementById("restart").style.display = "block";
    }
}

//Clears all scores and restarts game.
function restartGame() {
    document.getElementById("roundNumber").textContent = 0;
    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;
    document.getElementById("results").textContent = "";
    document.getElementById("finalResults").textContent = "";
    document.getElementById("restart").style.display = "none";
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
        button.style.display = "inline";
    });
}
