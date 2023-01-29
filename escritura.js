
/* variables */
const options = ["Rock", "Paper", "Scissors"];
let playerInput = ""; /* variable for players choice */
let computerChoice;
let playerChoice;


function getComputerChoice(computerChoice) {
        computerChoice = options[Math.floor(Math.random() * 3)];
        return computerChoice
}


function getPlayerChoice() {
    
    while (true) {
        playerInput = window.prompt('What is your option for rock paper and scissors');
        const playerChoice = playerInput.toString(); /* turn input to string to use in switch case */
        switch (playerChoice) {
            case "rock":
            case "ROCK":
            case "Rock":
                return 'Rock'; 

            case "paper":
            case "Paper":
            case "PAPER":
                return 'Paper'; 

            case "scissors":
            case "Scissors":
            case "SCISSORS":
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

/* function game(){
    var playerScore = 0; 
    var computerScore = 0;
    let roundPlayed = 0; 

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
            roundPlayed++; 
        }
    }
    if (playerScore > computerScore) { 
        console.log ('Player won the game');
    }
    else {
        console.log ('Computer won the game. Player Lost :(');
    }
    
    console.log(`Player Score: ${playerScore}`); 
    console.log(`Computer Score: ${computerScore}`);
    console.log(`The number of rounds played were ${roundPlayed}`);
} */



/* game(); */



/*     const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("paperBtn"); */

    const buttons = [
       
        document.getElementById("rockBtn"),
        document.getElementById("paperBtn"),
        document.getElementById("scissorsBtn")

    ];


    const key = [
        rockBtn.getAttribute("data-key"),
        paperKey = paperBtn.getAttribute("data-key"),
        scissorsKey = scissorsBtn.getAttribute("data-key")
    ];
    /* const rockKey = rockBtn.getAttribute("data-key");
    const paperKey = paperBtn.getAttribute("data-key");
    const scissorsKey = scissorsBtn.getAttribute("data-key"); */


    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
          if(e.target === buttons[0]){
            console.log('rock was pressed');
            const rockDiv = document.createElement('div');
            rockDiv.innerText = 'You chose Rock';
            const container = document.getElementById('container');
            container.appendChild(rockDiv);
          }
          else if(e.target === buttons[1]){
            const paperDiv = document.createElement('div');
            paperDiv.innerText = 'You chose Paper';
            const container = document.getElementById('container');
            container.appendChild(paperDiv);
          }
          else if (e.target === buttons[2]){
            const scissorsDiv = document.createElement('div');
            scissorsDiv.innerText = 'You chose Scissors';
            const container = document.getElementById('container');
            container.appendChild(scissorsDiv);
          }
        });
      });
    
    for (let i = 0; i < key.length;i++){
        console.log(key[i]);
    }






