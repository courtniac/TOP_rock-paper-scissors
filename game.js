let computerScore = 0;
let playerScore = 0;
let gameOver = false;

const buttons = document.getElementById("buttons");
for (const button of buttons.children) {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const resultDiv = document.getElementById("result");

    if (playerSelection === computerSelection) {
        resultDiv.textContent = "Draw! Try again.";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        updateScore(true);

        if (!gameOver) {
            resultDiv.textContent = `You won this round! (${playerSelection} beats ${computerSelection})`;
        }
    } else {
        updateScore(false);

        if (!gameOver) {
            resultDiv.textContent = `You lost this round. (${computerSelection} beats ${playerSelection})`;
        }
    }

    if (gameOver) {
        for (const button of buttons.children) {
            button.disabled = true;
        }
        
        resultDiv.textContent = playerScore === 5 ? "Congrats! You beat the computer! Refresh to try again." : "Sorry, you lost to the computer :( Refresh to try again.";
    }
}

function updateScore(playerWon) {
    if (playerWon) {
        playerScore++;
    } else {
        computerScore++;
    }

    if (computerScore === 5 || playerScore === 5) {
        gameOver = true;
    }

    const computerScoreSection = document.getElementById("computerScore");
    const playerScoreSection = document.getElementById("yourScore");

    computerScoreSection.textContent = computerScore;
    playerScoreSection.textContent = playerScore;
}
