function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length); 
    let randomElement = options[randomIndex];
    return randomElement;

}
const rockbtn = document.querySelector(`#rockbutton`);
rockbtn.addEventListener(`click`, playerSelectionRock)
const scissorsbtn = document.querySelector(`#scissorsbutton`);
scissorsbtn.addEventListener(`click`, playerSelectionScissors)
const paperbtn = document.querySelector(`#paperbutton`);
paperbtn.addEventListener(`click`, playerSelectionPaper)
const result = document.querySelector('#result')
const score = document.querySelector('#score');
const message = document.querySelector('#message');


function playerSelectionRock(){
    choice = 'rock';
    let pcSelection = getComputerChoice();
    play(pcSelection,choice)
    playCount++
    checkForFiveGames()
    
}
function playerSelectionScissors(){
    choice = 'scissors';
    let pcSelection = getComputerChoice();
    play(pcSelection,choice)
    playCount++
    checkForFiveGames()
}
function playerSelectionPaper(){
    choice = 'paper';
    let pcSelection = getComputerChoice();
    play(pcSelection,choice)
    playCount++
    checkForFiveGames()
    
}
function checkForFiveGames(){
    if (playCount >=5) {
        if(win > lose){
            result.textContent = 'Winner';
        }
        else if(lose > win){
            result.textContent = 'Loser';
        }
        else if(lose == win){
            result.textContent = 'Draw';
        }
        
    }
}

function play(pcSelection, playerSelect){
    if(playerSelect === "rock"){
        if(pcSelection === "Paper"){
            lose++
            score.textContent = `Wins:${win} Loses:${lose}`
            message.textContent = "You lose!"
            return "You lose!"
        }
        else if(pcSelection === "Scissors"){
            win++
            score.textContent = `Wins:${win} Loses:${lose}`
            message.textContent = "You win!"
            return "You win!"
        }
        else{
            message.textContent = "Draw!"
            return "Draw!"
        }


    }
    else if(playerSelect === "paper"){
        if(pcSelection === "Rock"){
            win++
            score.textContent = `Wins:${win} Loses:${lose}`
            message.textContent = "You win!"
            return "You win!"
        }
        else if(pcSelection === "Scissors"){
            lose++
            score.textContent = `Wins:${win} Loses:${lose}`
            message.textContent = "You lose!"
            return "You lose!"
        }
        else{
            message.textContent = "Draw!"
            return "Draw!"
        }


    }
    else if(playerSelect === "scissors"){
        if(pcSelection === "Rock"){
            lose++
            score.textContent = `Wins:${win} Loses:${lose}`
            message.textContent = "You lose!"
            return "You lose!"
        }
        else if(pcSelection === "Paper"){
            win++
            score.textContent = `Wins:${win} Loses:${lose}`
            message.textContent = "You win!"
            return "You win!"
        }
        else{
            message.textContent = "Draw!"
            return "Draw!"
        }


    }

}

let playCount = 0;
let choice = '';
let win = 0;
let lose = 0;

