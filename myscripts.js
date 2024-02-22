const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    //comp = getComputerChoice();
    player = playerSelection(e);
    //playRound(comp, player);
  });
});


function getComputerChoice(){
    rando = Math.floor(Math.random() * 3)
    if (rando === 1) {
        comp = "ROCK"
    } else if (rando === 2){
        comp = "PAPER"
    } else {
        comp = "SCISSORS"
    }
    return comp
}
function playerSelection(e){
    console.log(e.target.id)
    return
}

function playRound(comp, player){
    if (comp === player){
        console.log("DRAW!!!")
        return "D"
    } else if (comp === "ROCK" && player === "SCISSORS") {
        console.log("You Lose! Rock beats Scissors")
        return "L"
    } else if (comp === "ROCK" && player === "PAPER") {
        console.log("You Win! Paper beats Rock")
        return "W"
    } else if (comp === "SCISSORS" && player === "ROCK") {
        console.log("You Win! Rock beats Scissors")
        return "W"
    } else if (comp === "SCISSORS" && player === "PAPER") {
        console.log("You Lose! Scissors beats Paper")
        return "L"
    } else if (comp === "PAPER" && player === "ROCK") {
        console.log("You Lose! Paper beats Rock")
        return "L"
    } else if (comp === "PAPER" && player === "SCISSORS") {
        console.log("You Win! Scissors beats Paper")
        return "W"
    } else {
        console.log("You SLAPPED the shit out of the comptuer! You won!")
        return "S"
    }
    return
}

function getWinner(score) {
    if (score > 4){
        console.log("You DOMINATED!!!!")
    } else if (score === 3) {
        console.log("You may have lost some battles but you won the WAR!!!")
    } else {
        console.log("You loser. Go home.")
    }
}

function playGame(){
    game = 1
    score = 0
    while (true){
        comp = getComputerChoice()
        player = playerSelection()
        round = playRound(comp, player)
        if (round === "W"){
            score++
        }
        if (round === "D"){
            game--
        }
        if (round === "S"){
            game = 100
        }
        game++
        //if (game >= 5){
        //    getWinner(score)
        //    return
        //}    
    }
}
//playGame()