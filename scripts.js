function getRandomInt(max) {
    return Math.floor(Math.random()*max)
}

function printScore(hs, cs) {
    console.log("You: " + hs + "\nCPU: " + cs);
    return 0;
}

function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[getRandomInt(3)];
}

function getHumanChoice() {
    let userInput = prompt('Rock, Paper, or scissors');
    if (userInput == null) {
        console.log("GAME EXITED, ignore TypeError.")
    } else if (!['rock', 'paper', 'scissors'].includes(userInput)) {
        alert('Invalid Choice, Try again');
        return getHumanChoice();
    }
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(h, c) {
    if (h == "rock" && c == "scissors" || h == "paper" && c == "rock" || h == "scissors" && c == "paper") {
        console.log("You win! " + h + " beats " + c + ".");
        humanScore++;
    }
    else if (h == "rock" && c == "rock" || h == "paper" && c == "paper" || h == "scissors" && c == "scissors") {
        console.log("You drew! Both of you chose " + c + ".");
    }
    else if (h == "rock" && c == "paper" || h == "paper" && c == "scissors" || h == "scissors" && c == "rock") {
        console.log("You lose! " + c + " beats " + h + ".");
        computerScore++;
    }
}

function playGame() {
    while (humanScore != 5 && computerScore != 5) {
        playRound(getHumanChoice(), getComputerChoice());
        printScore(humanScore, computerScore);
    }
    if (humanScore == 5) {
        console.log("You win! Final Score:");
        printScore(humanScore, computerScore);
    } else {
        console.log("You lose! Final Score:")
        printScore(humanScore, computerScore);
    }
}

setTimeout(() => {
  playGame();
}, 5000);