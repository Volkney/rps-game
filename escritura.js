
/* variables */
const options = ["Rock", "Paper", "Scissors"];
let input = ""; /* variable for players choice */
let computerChoice;
let playerChoice;

/* get computer choice */
function getComputerChoice(computerChoice) {
        computerChoice = options[Math.floor(Math.random() * 3)];
        /* console.log(computerChoice); */
        return computerChoice
}
/* get players choice */

function getPlayerChoice() {
    
    while (true) {
        input = window.prompt('What is your option for rock paper and scissors');
        const playerChoice = input.toString(); /* turn input to string to use in switch case */
        switch (playerChoice) {
            case "rock":
            case "ROCK":
            case "Rock":
                /* console.log("You chose rock"); */
                return 'Rock'; 

            case "paper":
            case "Paper":
            case "PAPER":
                /* console.log("You chose paper"); */
                return 'Paper'; 

            case "scissors":
            case "Scissors":
            case "SCISSORS":
                /* console.log("You chose scissors"); */
                return 'Scissors'; 

            default:
                console.log('That is not a valid option')

        }
    }
}

function playRound(){  /* this function is to play one round of rock paper scissors */

    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    switch (true) {
        
        case computerChoice === playerChoice:
            console.log(`It's a tie! Both players chose ${computerChoice}.`);
            break;
        case (playerChoice === 'Paper' && computerChoice == 'Rock') ||
            (playerChoice === 'Rock' && computerChoice == 'Scissors') ||
            (playerChoice === 'Scissors' && computerChoice == 'Paper'):
            console.log(`Player chose ${playerChoice} and the Computer chose ${computerChoice}. You won!`)
            break;
        
            case (playerChoice === 'Rock' && computerChoice == 'Paper') ||
            (playerChoice === 'Scissors' && computerChoice == 'Rock') ||
            (playerChoice === 'Paper' && computerChoice == 'Scissors'):
            console.log(`You lost! Player chose ${playerChoice} and the Computer chose ${computerChoice}`);
            break;

            
    }

}

function game(){

   

    for(let i = 0; i < 5; i++){
        playRound = playRound();
        
        console.log(i);

    }

}

game();