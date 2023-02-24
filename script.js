function getComputerChoice(){
    let randomNumber =Math.floor(Math.random()*10)+1;
    if( randomNumber<4){
        return "rock":
    }
    else if(randomNumber>4&&randomNumber<8){
        return "paper";
    }
    else{
        return "scissor";
    }
}
function playRound(computerChoice,userChoice){
    if (userChoice==="PAPER"&&computerChoice==="ROCK"){
        return "You won/n paper beats rock";
    }
    else if (userChoice==="ROCK"&&computerChoice==="PAPER"){
        return "You lose paper beats rock";
    }
    else if (userChoice==="ROCK"&&computerChoice==="SCISSOR"){
        return "You won rock beats scissor";
    }
    else if (userChoice==="SCISSOR"&&computerChoice==="ROCK"){
        return "You lose rock beats scissor";
    }
    else if (userChoice==="SCISSOR"&&computerChoice==="PAPER"){
        return "You won scissor beats paper";
    }
    else if (userChoice==="PAPER"&&computerChoice==="SCISSOR"){
        return "You lose scissor beats paper";
    }
    else {
        return "match tie";
    }

}
let computerChoice =getComputerChoice();
computerChoice =computerChoice.toUpperCase();
let userChoice = prompt('enter your choice');
userChoice =userChoice.toUpperCase();
// console.log



