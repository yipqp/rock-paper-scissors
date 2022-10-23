let playerScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector(".result");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");
const gameEndMessage = document.querySelector(".game-end");
const restartButton = document.querySelector(".restart-button");
const buttons = document.querySelectorAll(".game-button");

addButtonListener();
restartButton.addEventListener("click", restartGame);

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
    restartButton.style.display = "block";
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    resultDiv.innerHTML = "<span>&#8203;</span>";
    playerScoreDiv.textContent = `Your score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    gameEndMessage.innerHTML = "<span>&#8203;</span>";
    restartButton.style.display = "none";
    addButtonListener();
}

function addButtonListener() {
    buttons.forEach(button => {
        button.addEventListener("click", playRound);  
    });
}
