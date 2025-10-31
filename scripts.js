// makes 'random' easier
function getRandomInt(max) {
    return Math.floor(Math.random()*max)
}

// computer chooses between rock, paper, or scissors
function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[getRandomInt(3)];
}

// disables all buttons for when the game ends:
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

// player and computer scores
let humanScore = 0;
let computerScore = 0;

// create resultsDiv (i.e. "You win, rock beats scissors!")
let resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv)

// functionality of the game (i.e. if player picks rock & computer picks scissors, player wins!)
function playRound(h, c) {
    if (h == "rock" && c == "scissors" || h == "paper" && c == "rock" || h == "scissors" && c == "paper") {
        resultsDiv.textContent = "You win! " + h + " beats " + c + ".";
        humanScore++;
    }
    else if (h == "rock" && c == "rock" || h == "paper" && c == "paper" || h == "scissors" && c == "scissors") {
        resultsDiv.textContent = "You drew! Both of you chose " + c + ".";
    }
    else if (h == "rock" && c == "paper" || h == "paper" && c == "scissors" || h == "scissors" && c == "rock") {
        resultsDiv.textContent = "You lose! " + c + " beats " + h + ".";
        computerScore++;
    }

    displayScore.innerHTML = "Player Score: " + humanScore + "<br>Computer Score: " + computerScore;

    if (humanScore === 5) {
        resultsDiv.textContent = "You won! Congrats";
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.textContent = "You lost...";
        disableButtons();
    }
}


// creates buttons (rock, paper, and scissors) with their respective id/textContent
let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");

rockButton.id = "rockButton";
paperButton.id = "paperButton";
scissorsButton.id = "scissorsButton";

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

// adds a menu container for the buttons
let menu = document.createElement("div")
menu.appendChild(rockButton);
menu.appendChild(paperButton);
menu.appendChild(scissorsButton);
document.body.appendChild(menu);

// adds eventListener to playRound() every time a button is clicked
menu.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'rockButton':
            playRound('rock', getComputerChoice())
            break
        case 'paperButton':
            playRound('paper', getComputerChoice())
            break
        case 'scissorsButton':
            playRound('scissors', getComputerChoice())
            break
    }
});

displayScore = document.createElement("div");
displayScore.innerHTML = "Player Score: " + humanScore + "<br>Computer Score: " + computerScore;
document.body.appendChild(displayScore);