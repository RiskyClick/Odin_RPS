
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function (e) {
    game(e.target.id);
});
paper.addEventListener('click', function (e) {
    game(e.target.id);
});
scissors.addEventListener('click', function (e) {
    game(e.target.id);
});
let playerScore = 0;
let compScore = 0
let round = 1;


//const score = document.querySelector('#container');


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function letsFight(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "rock"){
            return "Draw means nothing";
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors"
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            return "Draw means nothing";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper"
        } else {
            return "You Win! Paper beats Rock"
        }
    } else {
        if(computerSelection === "scissors"){
            return "Draw means nothing";
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        } else {
            return "You Win! Scissors beats Paper"
        }
    }
}

function removeEventListener(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    
}

function game(playerSelection){
    round++;
    let computerSelection = getComputerChoice();
    let result = letsFight(playerSelection, computerSelection);
    if(result[4] === "W") {
        playerScore++;
    } else if(result[4] === "L") {
        compScore++;
    }
    document.getElementById("round").innerHTML = `Round: ${round}`;
    document.getElementById("result").innerHTML = `${result}`;
    document.getElementById("playerScore").innerHTML = `Score: ${playerScore}`;
    document.getElementById("compScore").innerHTML = `Comp: ${compScore}`;
    if(playerScore > 4) {
        document.getElementById("result").innerHTML = "Congratulations You WIN!";
        removeEventListener();
    } else if (compScore > 4){
        document.getElementById("result").innerHTML = "You lose you fucken LOOSER!";
        removeEventListener();
    }
}
