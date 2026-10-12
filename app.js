//Get Computer Choice
const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Get User Coice

computerChoice = getComputerChoice();
console.log(computerChoice);
