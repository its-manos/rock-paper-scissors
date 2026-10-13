
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

//Get Computer Choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Get User Coice
function getPlayerChoice() {
    return prompt("What is your Choice?", "");
}



function playRound(playerChoice, computerChoice) {
    if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) {
        computerScore++;
    } else {
        humanScore++;
        computerScore++;
    }
}


for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice().toLowerCase();
    playRound(playerChoice, computerChoice);
    console.log(computerChoice);
    console.log(playerChoice);
}

console.log("Player: " + humanScore);
console.log("Computer: " + computerScore);

if (humanScore > computerScore) {
    console.log("The Player wins!")
} else if (computerScore > humanScore) {
    console.log("The Computer wins!")
} else {
    console.log("Draw!")
}


