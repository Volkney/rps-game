
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
            roundResult = 'Draw'
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
    console.log(roundResult);
    return roundResult;
    
}

function updateScores(playerScore, computerScore, roundPlayed, gameResult, roundsPlayed, playerScoreHtml, computerScoreHtml){
    playerScoreHtml.innerText = `Player Score: ${playerScore}`;
    computerScoreHtml.innerText = `Computer Score: ${computerScore}`;
    if (playerScore >= 3) { 
        gameResult.innerHTML = 'Player won the game. Game Over';
        roundsPlayed.innerText = `The number of rounds played were ${roundPlayed}`;
        return;
    } else if (computerScore >= 3) { 
        gameResult.innerHTML = 'Computer won the game. Game Over';
        roundsPlayed.innerText = `The number of rounds played were ${roundPlayed}`;
        return;
    }
    else if (playerScore === computerScore) { 
        roundsPlayed.innerText = `The number of rounds played were ${roundPlayed}`;
    }
}
        let playerScore = 0; 
        let computerScore = 0;
        let roundPlayed = 0; 

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        
        playerChoice = getPlayerChoice(e);

        let gameResult = document.getElementById('finalResult');
        let roundsPlayed = document.getElementById('roundsPlayed');
        let playerScoreHtml = document.getElementById('playerScore');
        let computerScoreHtml = document.getElementById('computerScore');
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
        updateScores(playerScore, computerScore, roundPlayed, gameResult, roundsPlayed, playerScoreHtml, computerScoreHtml);
    });
  });

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function() {
    playerScore = 0; 
    computerScore = 0;
    roundPlayed = 0; 
    document.getElementById("roundsPlayed").innerText = "";
    document.getElementById("playerScore").innerText = "Player Score: 0";
    document.getElementById("computerScore").innerText = "Computer Score: 0";
    document.getElementById("finalResult").innerText = "";
});









