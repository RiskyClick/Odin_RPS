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

function game(){
    let score = 0;
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
        let result = letsFight(playerSelection, computerSelection);
        console.log(result);
        if(result[4] === "W") {
            score++;
        } else if(result[4] === " "){
            console.log("HERHE")
            i--;
        }
        console.log(`Score: ${score}`);
        console.log(`Round: ${i}`);
    }
    if(score >= 3){
        console.log(`You Win! You won ${score} out of 5 games`)
    } else {
        console.log(`You Loose! You Lost ${5 - score} out of 5 games`)
    }
}

game();