
/* variables */
const options = ["Rock", "Paper", "Scissors"];
let playerInput = ""; /* variable for players choice */
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
        playerInput = window.prompt('What is your option for rock paper and scissors');
        const playerChoice = playerInput.toString(); /* turn input to string to use in switch case */
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
        /* check the conditions if the results yield a win or a lose */
        case computerChoice === playerChoice:
            console.log(`It's a tie! Both players chose ${computerChoice}.`);
            return 'tie';
        case (playerChoice === 'Paper' && computerChoice == 'Rock') ||
            (playerChoice === 'Rock' && computerChoice == 'Scissors') ||
            (playerChoice === 'Scissors' && computerChoice == 'Paper'):
            console.log(`Player chose ${playerChoice} and the Computer chose ${computerChoice}.`)
            return 'Player wins';
        
            case (playerChoice === 'Rock' && computerChoice == 'Paper') ||
            (playerChoice === 'Scissors' && computerChoice == 'Rock') ||
            (playerChoice === 'Paper' && computerChoice == 'Scissors'):
            console.log(`Player chose ${playerChoice} and the Computer chose ${computerChoice}`);
            return 'Computer wins';

            
    }

}

function game(){
    var playerScore = 0; /* starts at zero to add keep adding the result */
    var computerScore = 0;
    let roundPlayed = 0; /* variable adds the number of rounds played in total */

    for(let i = 0; playerScore < 3 && computerScore < 3; i++){
        const result = playRound();
        if (result === 'Player wins'){
            playerScore++;
            roundPlayed++;
            console.log(result);
        }
        else if (result === 'Computer wins') {
            computerScore++;
            roundPlayed++;
            console.log(result);
        }
        else {
            roundPlayed++;  /* else state is to count rounds for ties only*/
        }
    }
    if (playerScore > computerScore) { /* to check who won the best of 5 */
        console.log ('Player won the game');
    }
    else {
        console.log ('Computer won the game. Player Lost :(');
    }
    /* display the scores for the rounds played */
    console.log(`Player Score: ${playerScore}`); 
    console.log(`Computer Score: ${computerScore}`);
    /* display total rounds played */
    console.log(`The number of rounds played were ${roundPlayed}`);
}



game();