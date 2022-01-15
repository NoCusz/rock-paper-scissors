const btn_paper = document.querySelector('.btn-paper');
const btn_rock = document.querySelector('.btn-rock');
const btn_scissors = document.querySelector('.btn-scissors');

const resultP = document.querySelector('.resultP')
const resultC = document.querySelector('.resultC')

let playerScore = 0;
let computerScore = 0;

const display_result = document.querySelector('.display-result');

const content = document.createElement('div');
content.classList.add('content');
display_result.appendChild(content);

const declare_winner = document.createElement('div');
declare_winner.classList.add('declare_winner');
display_result.appendChild(declare_winner);




function showScore(player, computer){
    resultP.textContent = 'Player : ' + player;
    resultC.textContent = computer + ' : Computer';
}

btn_paper.addEventListener('click', () => {
    let paper = 'paper';
    let result1 = playRound(computerPlay(), playerSelection(paper));
    game(result1);
});

btn_rock.addEventListener('click', () => {
    let rock = 'rock';
    let result1 = playRound(computerPlay(), playerSelection(rock));
    game(result1);
});

btn_scissors.addEventListener('click', () => {
    let scissors = 'scissors';
    let result1 = playRound(computerPlay(), playerSelection(scissors));
    game(result1);
});

//---------------------------------------------------------------------------------------
function declareWinner(winner) {
    if (winner === 'player')
        declare_winner.textContent = 'You Win!';
    else if (winner === 'computer')
        declare_winner.textContent = 'You Lost';
}

function playAgain(){

    document.querySelector('.btn-rock').disabled = true;
    document.querySelector('.btn-paper').disabled = true;
    document.querySelector('.btn-scissors').disabled = true;

    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('play-again');
    playAgainButton.textContent = 'Play Again'
    display_result.appendChild(playAgainButton);

    if (playerScore === 5 || computerScore === 5){
            playAgainButton.addEventListener('click', () => {
              window.location.reload();
            });
        }
}


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

function playerSelection(choice) {
    return choice.toLowerCase();
}

function playRound(computerPlay, playerSelection) {
    let result = null;
    
    if ((computerPlay === 'rock') && (playerSelection === 'scissors')) {     
            content.textContent = 'You lose! Rock beats scissors';
            result = 'lose';
    } else if ((computerPlay === 'scissors') && (playerSelection === 'rock')) {
            content.textContent = 'You win! Rock beats scissors';
            result = 'win';
    } else if ((computerPlay === 'rock') && (playerSelection === 'paper')) {
            content.textContent = 'You Win! Paper beats rock';
            result = 'win';
    } else if ((computerPlay === 'paper') && (playerSelection === 'rock')) {
            content.textContent = 'You lose! Paper beats rock';
            result = 'lose';
    } else if ((computerPlay === 'paper') && (playerSelection === 'scissors')) {
            content.textContent = 'You win! Scissors beats paper';
            result = 'win';
    } else if ((computerPlay === 'scissors') && (playerSelection === 'paper')) {
            content.textContent = 'You lose! Scissors beats paper';
            result = 'lose';
    } else if (((computerPlay === 'scissors') && (playerSelection === 'scissors')) || ((computerPlay === 'rock') && (playerSelection === 'rock')) || ((computerPlay === 'paper') && (playerSelection === 'paper'))) {
            content.textContent = 'Tie';
            result ='tie';
    }
    return result;
  } 
  


 function game(result1){
    let iteration = result1;

        if(iteration === 'win'){
            playerScore++;
        } else if(iteration === 'lose') 
            computerScore++;

        showScore(playerScore, computerScore);
    //console.log(playerScore + ":" + computerScore);

    if (playerScore === 5) {
        declareWinner('player');
        playAgain()
    } else if (computerScore === 5) {
        declareWinner('computer');
        playAgain();
    }
}