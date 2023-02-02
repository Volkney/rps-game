
/* variables */
const options = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let roundResult;

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
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    document.getElementById('chosenOption').innerText = `You chose  ${playerChoice}`;
    return playerChoice;
}



function playRound(){  
    computerChoice = getComputerChoice();
    document.getElementById('pcChoiceDisplay').innerText = `The computer chose ${computerChoice}`;
    const result = document.getElementById('result');
    if (computerChoice === playerChoice) {
            result.innerText = 'Draw';
    } 
    
    else if ((playerChoice === 'Paper' && computerChoice === 'Rock') ||
               (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
               (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
                result.innerText = 'Player Wins';
                roundResult = 'Player Wins';
               }

    else if ((playerChoice === 'Rock' && computerChoice === 'Paper') ||
        (playerChoice === 'Scissors' && computerChoice === 'Rock') ||
        (playerChoice === 'Paper' && computerChoice === 'Scissors')) {
        result.innerText = 'Computer Wins';
        roundResult = 'Computer Wins';
    }
    else {
        result.innerText = 'Something went wrong';
    }
    return roundResult;
}


function game(){
    var playerScore = 0; 
    var computerScore = 0;
    let roundPlayed = 0; 
    let gameResult = document.getElementById('roundResult');
    let roundsPlayed = document.getElementById('roundsPlayed');
    let playerScorehtml = document.getElementById('playerScore');
    let computerScorehtml = document.getElementById('computerScore');

    while (playerScore < 3 && computerScore < 3) {
        roundResult = playRound();
        if (roundResult === 'Player Wins') {
          playerScore++;
          roundPlayed++;
        } else if (roundResult === 'Computer Wins') {
          computerScore++;
          roundPlayed++;
        } else if (roundResult === 'Draw') {
          roundPlayed++;
        }

        playerScorehtml.innerText = `Player Score: ${playerScore}`;
        computerScorehtml.innerText = `Computer Score: ${computerScore}`;

        if (playerScore >= 3) { 
            gameResult.innerHTML = 'Player won the game';
            roundsPlayed.innerText = `The number of rounds played were ${roundPlayed}`;
            break;
        } else if (computerScore >= 3) { 
            gameResult.innerHTML = 'Computer won the game';
            roundsPlayed.innerText = `The number of rounds played were ${roundPlayed}`;
            break;
        }
    }

    if (playerScore === computerScore) { 
        gameResult.innerHTML = "It's a draw";
        roundsPlayed.innerText = `The number of rounds played were ${roundPlayed}`;
    }
}

    if (playerScore === computerScore) { 
    gameResult.innerHTML = "It's a draw";
    roundsPlayed.innerText = `The number of rounds played were ${roundPlayed}`;

}

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        
        playerChoice = getPlayerChoice(e);
        game();
    });
  });







