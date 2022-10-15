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

    function winRound() {
        playerScore++;
        console.log(winMsg);
        return winMsg;
    }
    function loseRound() {
        computerScore++;
        console.log(loseMsg);
        return loseMsg;
    }

    if (playerSelection === computerSelection) {
        return `It's a tie! You both played ${playerSelection}.`;
    } 

    if (playerSelection === `rock`) {
        if (computerSelection === `paper`) {
            loseRound();
        } else {
            winRound();
        }
    }
    if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            winRound();
        } else {
            loseRound();
        }
    }
    if (playerSelection === `scissors`) {
        if (computerSelection === `rock`) {
            loseRound();
        } else {
            winRound();
        }
    }
}

