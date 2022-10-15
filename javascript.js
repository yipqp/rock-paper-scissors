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
    playerSelection = playerSelection.toLowerCase();
    let winMsg = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}.`;
    let loseMsg = `You lost! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}.`;
    let tieMsg = `It's a tie! You both played ${playerSelection}.`;

    function winRound() {
        playerScore++;
        // console.log(winMsg);
        return winMsg;
    }
    function loseRound() {
        computerScore++;
        // console.log(loseMsg);
        return loseMsg;
    }

    if (playerSelection === computerSelection) {
        // console.log(tieMsg);
        return tieMsg;
    } 

    if (playerSelection === `rock`) {
        if (computerSelection === `paper`) {
            return loseRound();
        } else {
            return winRound();
        }
    }
    if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            return winRound();
        } else {
            return loseRound();
        }
    }
    if (playerSelection === `scissors`) {
        if (computerSelection === `rock`) {
            return loseRound();
        } else {
            return winRound();
        }
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function game() {
    resetGame();
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Type rock, paper, or scissors:");
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
