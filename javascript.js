let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor((Math.random()*3)+1);
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper"
    } else {
        return "scissors";
    }
}

function capitalizeFirstLetter(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = this.id;
    computerSelection = getComputerChoice();

    const resultDiv = document.querySelector(".result");
    const playerScoreDiv = document.querySelector(".player-score");
    const computerScoreDiv = document.querySelector(".computer-score");

    let winMsg = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}.`;
    let loseMsg = `You lost! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}.`;
    let tieMsg = `It's a tie! You both played ${playerSelection}.`;

    if (playerSelection === computerSelection) {
        resultDiv.textContent = tieMsg;
    } else if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) 
        {
            computerScore++;
            resultDiv.textContent = loseMsg;
        } else {
            playerScore++;
            resultDiv.textContent = winMsg;
        }

    if (playerScore === 5 || computerScore === 5) {
            endGame();
        }

    playerScoreDiv.textContent = `Your score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
}

function endGame() {
    const gameEndMessage = document.querySelector(".game-end-message");
    let gameResult = "";

    buttons.forEach(button => {
        button.removeEventListener("click", playRound);  
    });

    if (playerScore > computerScore) {
        gameResult = ("You won the battle!");
    } else {
        gameResult = ("Better luck next time...");
    }

    gameEndMessage.textContent = gameResult;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", playRound);  
});
