// Computer randomly selects rock, paper or scissors
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[ (Math.floor(Math.random() * options.length)) ]; 
}


let playerScore = 0;
let computerScore = 0;

//create container for scores
const playerContainer = document.getElementById("playerContainer");
const computerContainer = document.getElementById("computerContainer");

//create container for results to display to user
const resultsContainer = document.getElementById("resultsContainer");
const resultClass = document.getElementById("result");
const roundNum = document.getElementById("roundNum");

let round = 0;

function firstRound(playerSelection, computerSelection){
    let result;
    //in case of both players choosing the same choice 
    if (playerSelection === computerSelection){
        round += 1;
        newImage.src = "./images/loserRPS.jpg";
        result = "Draw!";
    // Player beats computer
    }else if (playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection == "paper" 
    || playerSelection === "paper" && computerSelection === "rock" ){
        round += 1;
        newImage.src = "./images/winnerRPS.jpeg";
        playerScore += 1;
        result = "You win, " + playerSelection + " beats " 
        + computerSelection + "!";
    //Computer beats player
    }else{
        round += 1;
        newImage.src = "./images/loserRPS.jpg";
        computerScore += 1;
        result = "You lose, " + computerSelection + " beats " 
        + playerSelection + "!";
    }  
    roundNum.innerText = "Round: " + round; 
    //scores
    playerContainer.textContent = "Player Score: " + playerScore;
    computerContainer.textContent = "Computer \nScore: " + computerScore;
    // Display results of each round
    resultClass.textContent = result;

    /*Returns if the player is the winner or the loser 
    once either player reaches 5 points*/
    if (computerScore === 5 || playerScore === 5){
        // newImage.src = "./images/startRPS.jpg";
        const winnerLoser = () => {
            if (playerScore === 5){
                newImage.src = "./images/winnerRPS.jpeg";
                return "You are the winner!";
            }
            newImage.src = "./images/loserRPS.jpg";
            return "Loser! The computer wins!";
          
        }
    
        let output = `${winnerLoser()}!`;
        resultClass.innerText = output;

        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";
        playAgainBtn.className = "playAgainBtn";
        playAgainBtn.addEventListener("click", () => {
            computerScore = 0;
            playerScore = 0;
            round = 0;
            resultClass.innerHTML = "";
            roundNum.innerHTML = "";
            playerContainer.textContent = " ";
            computerContainer.textContent = " ";
            newImage.src = "./images/startRPS.jpg";
            resultsContainer.removeChild(playAgainBtn);
        });
        resultsContainer.appendChild(playAgainBtn);
        
    }
}

/*sends playerSelection and computerSelection 
into firstRound function when a button is pressed */
const playGame = (playerSelection) => {
    // Stop the game if either player's score is 5
    if (computerScore === 5 || playerScore === 5){
        return;
    }
    let computerSelection = getComputerChoice();
    firstRound(playerSelection, computerSelection);
}

//image at top page to match with buttons clicked
const currentImage = document.getElementById("imgContainer");
const newImage = document.createElement("img");
newImage.src = "./images/startRPS.jpg";
currentImage.appendChild(newImage);

//makes buttons work
const rockBtn = document.getElementById("rockBtn");
rockBtn.innerHTML = '<img src =  "./images/rockRPS.jpg">';
rockBtn.addEventListener("click", () => {
    playGame("rock")
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.innerHTML = '<img src =  "./images/paperRPS.jpg">';
paperBtn.addEventListener("click", () => {
    playGame("paper")
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.innerHTML = '<img src =  "./images/scissorsRPS.jpg">';
scissorsBtn.addEventListener("click", () => {
    playGame("scissors")
});