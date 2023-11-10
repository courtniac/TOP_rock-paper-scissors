function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?");
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.length > 0 ? playerSelection.trim().toLowerCase() : "";

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Invalid play. Please try again.";
    } else if (playerSelection === computerSelection) {
        return "Draw! Try again.";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return `You won this round! (${playerSelection} beats ${computerSelection})`;
    } else {
        return `You lost this round. (${computerSelection} beats ${playerSelection})`;
    }
}

function game() {
    console.log("Let's play Rock, Paper, Scissors!");
    let computerScore = 0;
    let playerScore = 0;
    let round = 1;

    while (round<6) {
        console.log(`- Round ${round} of 5 -\nComputer: ${computerScore}\nYou: ${playerScore}`);
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        
        if (result.includes("won")) {
            playerScore++;
            round++;
        } else if (result.includes("lost")) {
            computerScore++;
            round++;
        }
    }

    if (computerScore > playerScore) {
        console.log(`Sorry, you lost to the computer :(\n- Final score -\nComputer: ${computerScore}\nYou: ${playerScore}`);
    } else {
        console.log(`Congrats! You beat the computer!\n- Final score -\nComputer: ${computerScore}\nYou: ${playerScore}`);
    }
}

game();