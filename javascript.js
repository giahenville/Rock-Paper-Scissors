// Ask user input (choose between rock, paper, or scissors)

// Computer randomly selects rock, paper or scissors
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[ (Math.floor(Math.random() * options.length -1)) ]; 
    
   
}
// getComputerChoice();

// Compare both selections
// let computerSelection = getComputerChoice();
function firstRound(){
    let playerSelection = prompt("Choose rock, paper, or scissors: ");
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    // tie
    if (playerSelection.toLowerCase() === computerSelection){
        return;
    }
    
    // rock beats scissors
    // rock loses to paper 
    // paper beats rock
    // paper loses to scissors
    // scissors beats paper
    // scissors loses to rock
}
firstRound();