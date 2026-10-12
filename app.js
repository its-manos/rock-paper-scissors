
const choices = ["Rock", "Paper", "Scissors"];
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
    if ((playerChoice == "Rock" && computerChoice=="Scissors") || (playerChoice == "Paper" && computerChoice=="Rock") || (playerChoice == "Scissors" && computerChoice=="Paper")) {
        humanScore++;
    } else if ((computerChoice == "Rock" && playerChoice=="Scissors") || (computerChoice == "Paper" && playerChoice=="Rock") || (computerChoice == "Scissors" && playerChoice=="Paper")) {
        computerScore++;
    } else {
        humanScore++;
        computerScore++;
    }
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
playRound(computerChoice, playerChoice);
console.log(computerChoice);
console.log(playerChoice);
console.log(humanScore);
console.log(computerScore);


