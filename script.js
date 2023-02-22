function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length); 
    let randomElement = options[randomIndex];
    return randomElement;

}

function playerSelection(){
    let input = prompt();
    return input;
}

function play(pcSelection, playerSelect){
    if(playerSelect === "rock"){
        if(pcSelection === "Paper"){
            lose++
            return "You lose!"
        }
        else if(pcSelection === "Scissors"){
            return "You win!"
        }
        else{
            return "Draw!"
        }


    }
    else if(playerSelect === "paper"){
        if(pcSelection === "Rock"){
            win++
            return "You win!"
        }
        else if(pcSelection === "Scissors"){
            lose++
            return "You lose!"
        }
        else{
            return "Draw!"
        }


    }
    else if(playerSelect === "scissors"){
        if(pcSelection === "Rock"){
            lose++
            return "You lose!"
        }
        else if(pcSelection === "Paper"){
            win++
            return "You win!"
        }
        else{
            return "Draw!"
        }


    }

}

let win = 0;
let lose = 0;

for(let i = 0; i <= 4; i++){
    let player = playerSelection().toLowerCase();
    let pc = getComputerChoice()
    
    console.log(play(pc,player))
    
}
if(win > lose){
    console.log("Winner")
}
else if(lose > win){
    console.log("Loser")
}
else if(lose == win){
    console.log("Draw")
}