/* get computer choice */

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
        let computerChoice = console.log(options[Math.floor(Math.random() * 3)]);
        return computerChoice
}

console.log(getComputerChoice());

function playerChoice() {
    prompt = 'What is your option for rock paper scissors'
}