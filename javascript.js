// Ask user input (choose between rock, paper, or scissors)

// Computer randomly selects rock, paper or scissors
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[ (Math.floor(Math.random() * options.length)) ]; 
}

// Compare both selections
function firstRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    //in case of both players choosing the same choice 
    if (playerSelection === computerSelection){
        return "Draw";
     // Player beats computer
    }else if (playerSelection === "rock" && computerSelection === "scissors" ||
     playerSelection === "scissors" && computerSelection == "paper" || 
     playerSelection === "paper" && computerSelection === "rock" ){
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }else{
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(firstRound(playerSelection, computerSelection));
    
    
    // rock loses to paper 
    // paper beats rock
    // paper loses to scissors
    // scissors beats paper
    // scissors loses to rock

