function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice)
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playersChoice, computerChoice)
{
    let winMsg = "You Win! " + playersChoice + " beats " + computerChoice;
    let loseMsg = "You Lose! " + computerChoice + " beats " + playersChoice;

    if(playersChoice == computerChoice)
    {
        console.log("TIE");
        return playRound(playersChoice, getComputerChoice());
        
    }

    if(playersChoice == "rock")
    {
        return computerChoice == "paper" ? loseMsg : winMsg;
    }
    else if(playersChoice == "paper")
    {
        return computerChoice == "scissors" ? loseMsg : winMsg;
    }
    else if(playersChoice == "scissors")
    {
        return computerChoice == "rock" ? loseMsg : winMsg;
    }
}


let playersChoice = "Rock".toLowerCase();
let computerChoice = getComputerChoice();
console.log(playRound(playersChoice, computerChoice));
