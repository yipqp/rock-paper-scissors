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
    let winMsg = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}.`;
    let loseMsg = `You lost! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}.`;
    let tieMsg = `It's a tie! You both played ${playerSelection}.`;

    function winRound() {
        playerScore++;
        return winMsg;
    }
    function loseRound() {
        computerScore++;
        return loseMsg;
    }

    if (playerSelection === computerSelection) {
        return tieMsg;
    } 

    if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) 
        {
            return loseRound();
        } else {
            return winRound();
        }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function game() {
    resetGame();
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Type rock, paper, or scissors:", "").toLowerCase();
        while (playerSelection === "") {
            playerSelection = prompt("Type a valid answer!");
        }
        console.log(playRound(playerSelection, getComputerChoice()));
    }

    if (playerScore === computerScore) {
        console.log(`You both tied! No one won...`);
    } else if (playerScore > computerScore) {
        console.log(`You won the battle!`);
    } else {
        console.log(`Better luck next time...`);
    }
}
