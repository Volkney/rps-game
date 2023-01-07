/* get computer choice */

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
        let computerChoice = console.log(options[Math.floor(Math.random() * 3)]);
        return computerChoice
}

console.log(getComputerChoice());

function question () {
    let player = prompt('What is your option for rock paper and scissors');
    return player;
}


let input;

function playerChoice(input) {
    
    while (true) {
        input = prompt('What is your option for rock paper and scissors');
        let value = input.toString();
        switch (value) {
            case "rock":
            case "ROCK":
            case "Rock":
                console.log("You chose rock");
                return; 

            case "paper":
            case "Paper":
            case "PAPER":
                console.log("You chose paper");
                return; 

            case "scissors":
            case "Scissors":
            case "SCISSORS":
                console.log("You chose scissors");
                return; 

            default:
                console.log('That is not a valid option')

        }
    }
}

playerChoice(input);