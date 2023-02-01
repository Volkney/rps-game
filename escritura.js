
/* variables */
const options = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;

const buttons = [
       
    document.getElementById("rockBtn"),
    document.getElementById("paperBtn"),
    document.getElementById("scissorsBtn")

];


const key = [
    'Rock',
    'Paper',
    'Scissors'
];


function getComputerChoice(computerChoice) {
    return options[Math.floor(Math.random() * 3)]; 
}

function getPlayerChoice (e) {
    playerChoice = e.target.id.replace ('Btn', '');
    document.getElementById('chosenOption').innerText = `You chose  ${playerChoice}`;
    return playerChoice;
}


function playRound(){  
    computerChoice = getComputerChoice();
    document.getElementById('pcChoiceDisplay').innerText = `The computer chose ${computerChoice}`;

    if (computerChoice === playerChoice) {
        document.getElementById('result').innerText = 'Draw';
    } else if ((playerChoice === 'Paper' && computerChoice === 'Rock') ||
               (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
               (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        document.getElementById('result').innerText = 'Player Wins';
    } else {
        document.getElementById('result').innerText = 'Computer Wins';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        
        playerChoice = getPlayerChoice(e);
        playRound();
    });
  });

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








