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
    if(playersChoice == computerChoice)
    {
        console.log("TIE");
        return playRound(playersChoice, getComputerChoice());
        
    }

    if(playersChoice == "rock")
    {
        return computerChoice == "paper" ? false : true;
    }
    else if(playersChoice == "paper")
    {
        return computerChoice == "scissors" ? false : true;
    }
    else if(playersChoice == "scissors")
    {
        return computerChoice == "rock" ? false : true;
    }
}

let playerScore = 0;
let computerScore = 0;

function game(playersChoice)
{
    const resultDiv = document.querySelector('#result');

    let computerChoice = getComputerChoice();

    let winMsg = "You Win! " + playersChoice + " beats " + computerChoice;
    let loseMsg = "You Lose! " + computerChoice + " beats " + playersChoice;
    let result = playRound(playersChoice, computerChoice);
    resultDiv.textContent = result ? winMsg : loseMsg;

    result ? playerScore++ : computerScore++;

    const scoreDiv = document.querySelector('#score');
    scoreDiv.textContent = playerScore + " : " + computerScore;

    if(playerScore == 5 || computerScore == 5)
    {
        playerScore = 0;
        computerScore = 0;
        
        result ? alert("YOU WIN") : alert("YOU LOSE");
    }
}

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    game("rock")
});
