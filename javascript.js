// Computer randomly selects rock, paper or scissors
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[ (Math.floor(Math.random() * options.length)) ]; 
}


let playerScore = 0;
let computerScore = 0;

//create container for results to display to user
const resultsContainer = document.getElementById("resultsContainer");

function firstRound(playerSelection, computerSelection){
    let result;
    //in case of both players choosing the same choice 
    if (playerSelection === computerSelection){
        result = "Draw! Your score is: " + playerScore 
        + ". Computer score is:  " + computerScore + ". ";
    // Player beats computer
    }else if (playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection == "paper" 
    || playerSelection === "paper" && computerSelection === "rock" ){
        playerScore += 1;
        result = "You win, " + playerSelection + " beats " 
        + computerSelection + "!" + " Your score is: " + playerScore 
        + ". Computer score is:  " + computerScore + ". ";
    //Computer beats player
    }else{
        computerScore += 1;
        result = "You lose, " + computerSelection + " beats " 
        + playerSelection + "!" + " Your score is: " + playerScore 
        + ". Computer score is:  " + computerScore + ". ";
    }   
    
    // Display results of each round
    resultsContainer.innerHTML = result;

    /*Returns if the player is the winner or the loser 
    once either player reaches 5 points*/
    if (computerScore === 5 || playerScore === 5){
        const winnerLoser = () => {
            if (playerScore === 5){
                return "You are the winner!";
            }
            return "Loser! The computer wins!";
        }

        let output = `${winnerLoser()} Your final score is: ${playerScore}!`;
        resultsContainer.innerText = output;
    }
}

/*declare playGame variable in order to send playerSelection and
computerSelection into firstRound function when a button is pressed */
const playGame = (playerSelection) => {
    // Stop the game if either player's score is 5
    if (computerScore === 5 || playerScore === 5){
        return;
    }
    let computerSelection = getComputerChoice();
    firstRound(playerSelection, computerSelection);
}

//makes buttons work
const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", () => {
    playGame("rock")
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener("click", () => {
    playGame("paper")
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    playGame("scissors")
});