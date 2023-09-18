// Ask user input (choose between rock, paper, or scissors)
// Computer randomly selects rock, paper or scissors
function getComputerChoice(){
    options = ["rock", "paper", "scissors"];
    console.log(options[ (Math.floor(Math.random() * options.length))]);
    return;
}
getComputerChoice();
// Compare both selections
    // rock beats scissors
    // rock loses to paper 
    // paper beats rock
    // paper loses to scissors
    // scissors beats paper
    // scissors loses to rock