function computerPlay() {
    let computerChoiceMath = (Math.floor(Math.random() * 3));
    let computerChoice = null;

    if(computerChoiceMath === 0) {
        computerChoice = 'rock';
    } else if (computerChoiceMath === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
return computerChoice;
} 

function playerSelection() {
    let choice = prompt("Choose: Rock Paper Scissors");
    return choice.toLowerCase();
}

function playRound(computerPlay, playerSelection) {
    let result = null;

    if ((computerPlay === 'rock') && (playerSelection === 'scissors')) {
            console.log('You lose! Rock beats scissors');
            result = 'lose';
    } else if ((computerPlay === 'scissors') && (playerSelection === 'rock')) {
            console.log('You win! Rock beats scissors');
            result = 'win';
    } else if ((computerPlay === 'rock') && (playerSelection === 'paper')) {
            console.log('You Win! Paper beats rock');
            result = 'win';
    } else if ((computerPlay === 'paper') && (playerSelection === 'rock')) {
            console.log('You lose! Paper beats rock');
            result = 'lose';
    } else if ((computerPlay === 'paper') && (playerSelection === 'scissors')) {
            console.log('You win! Scissors beats paper');
            result = 'win';
    } else if ((computerPlay === 'scissors') && (playerSelection === 'paper')) {
            console.log('You lose! Scissors beats paper');
            result = 'lose';
    } else if (((computerPlay === 'scissors') && (playerSelection === 'scissors')) || ((computerPlay === 'rock') && (playerSelection === 'rock')) || ((computerPlay === 'paper') && (playerSelection === 'paper'))) {
            console.log('Tie');
            result ='tie';
    } else {
            console.log('Choose wisely');
    } 
    return result;
  } 
  


function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i<=4; i++) {
        let iteration = playRound(computerPlay(), playerSelection());
        if (iteration === 'win') {
            playerScore++;
        } else if (iteration === 'lose') {
            computerScore++;
        } else {
            //do nothing
        }
        }

    console.log(playerScore + ":" + computerScore);

    if (computerScore > playerScore) {
        console.log('YOU LOST');
    } else if (computerScore < playerScore) {
        console.log('YOU WIN');
    } else {
        console.log('TIE')
    }

    }


game(); 