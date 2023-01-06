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


let value = false;
function playerChoice() {
    while (value!=true)
        var player = prompt('What is your option for rock paper and scissors');
        switch (player) {
            case 'rock' || 'ROCK' || 'Rock': 
            value = true
            break;

            case 'paper' || 'PAPER' || 'Paper': 
            value = true
            break;

            case 'Scissors' || 'SCISSORS' || 'Scissors': 
            value = true
            break;

            default:
                console.log('That is not a valid option')

        }
}

playerChoice();