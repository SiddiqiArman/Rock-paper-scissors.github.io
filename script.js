let count1;
let count2;
count1 =0;
count2 =0;
function getComputerChoice(){
    let randomNumber =Math.floor(Math.random()*10)+1;
    if( randomNumber<4){
        return "rock";
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
        count1++;
        return "You won ! paper beats rock";
    }
    else if (userChoice==="ROCK"&&computerChoice==="PAPER"){
        count2++;
        return "You lose ! paper beats rock";
    }
    else if (userChoice==="ROCK"&&computerChoice==="SCISSOR"){
        count1++;
        return "You won ! rock beats scissor";
    }
    else if (userChoice==="SCISSOR"&&computerChoice==="ROCK"){
        count2++;
        return "You lose ! rock beats scissor";
    }
    else if (userChoice==="SCISSOR"&&computerChoice==="PAPER"){
        count1++;
        return "You won ! scissor beats paper";
    }
    else if (userChoice==="PAPER"&&computerChoice==="SCISSOR"){
        count2++;
        return "You lose ! scissor beats paper";
    }
    else {
        return "match tie";
    }

}
function game(){
    let computerChoice;
    let userChoice;
    for(let i=0;i<5;i++){
        computerChoice =getComputerChoice();
        computerChoice =computerChoice.toUpperCase();
        userChoice = prompt('enter your choice');
        userChoice =userChoice.toUpperCase();
        console.log(playRound(computerChoice,userChoice));
    }
   
    if(count1>count2){
        console.log("computer score : "+count2);
        console.log("user score : "+count1);
        console.log("YOU WON");
    }
    else{
        console.log("computer score : "+count2);
        console.log("user score : "+count1);
        console.log("YOU LOSE");
    }

}
// let computerChoice =getComputerChoice();
// computerChoice =computerChoice.toUpperCase();
// let userChoice = prompt('enter your choice');
// userChoice =userChoice.toUpperCase();
// // console.log
// console.log("the computer choice is  "+computerChoice)
// console.log("the user choice is  "+userChoice)
// console.log(playRound(computerChoice,userChoice))
game()
