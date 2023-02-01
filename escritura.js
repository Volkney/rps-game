
/* variables */
const options = ["Rock", "Paper", "Scissors"];
let playerInput = ""; /* variable for players choice */
let computerChoice;
let playerChoice;

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


function getComputerChoice(computerChoice) {
        computerChoice = options[Math.floor(Math.random() * 3)];
        pcChoiceDisplay = document.getElementById('pcChoiceDisplay');
        pcChoiceDisplay.innerText = `The computer chose ${computerChoice}`;
        return computerChoice;
}

function getPlayerChoice () {
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
        if(e.target === buttons[0]){
            const rockDiv = document.getElementById('chosenOption');
            playerChoice = key[0];
            rockDiv.innerText = `You chose ${playerChoice}`;
            console.log(playerChoice);
        }
        else if(e.target === buttons[1]){
            const paperDiv = document.getElementById('chosenOption');
            playerChoice = key[1];
            paperDiv.innerText = `You chose ${playerChoice}`;
            console.log(playerChoice);
        }
        else if (e.target === buttons[2]){
            const scissorsDiv = document.getElementById('chosenOption');
            playerChoice = key[2];
            scissorsDiv.innerText = `You chose ${playerChoice}`;
            console.log(playerChoice);
        }
        });
    });

}
    
  buttons.forEach(button => {
    button.addEventListener('click', function(e){
        
        getPlayerChoice(e);
        getComputerChoice();
    });
  });


function playRound(){  

    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    switch (true) {
        
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


    /* const rockKey = rockBtn.getAttribute("data-key");
    const paperKey = paperBtn.getAttribute("data-key");
    const scissorsKey = scissorsBtn.getAttribute("data-key"); */








