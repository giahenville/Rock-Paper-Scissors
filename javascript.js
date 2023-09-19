// Computer randomly selects rock, paper or scissors
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[ (Math.floor(Math.random() * options.length)) ]; 
}

// Compare both selections
function game(){

    let score = 0;
  
    function firstRound(playerSelection, computerSelection){
        //in case of both players choosing the same choice 
        if (playerSelection === computerSelection){
            let result = "Draw";
            return "Your score is: " + score + " " + result;
        // Player beats computer
        }else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection == "paper" || 
        playerSelection === "paper" && computerSelection === "rock" ){
            score += 1;
            result = "You win! " + playerSelection + " beats " + computerSelection + "!";
            return "Your score is: " + score + " " + result;
        //Computer beats player
        }else{
            result =  "You lose! " + computerSelection + " beats " + playerSelection + "!";
            return "Your score is: " + score + " " + result;
        }   
    }

    for (let i = 1; i <= 5; i++){
        let computerSelection = getComputerChoice();
        // Ask user input (choose between rock, paper, or scissors)
        let playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase(); 
        console.log(firstRound(playerSelection, computerSelection));
    }
    
    const finalResult = score >= 3
        ? "Winner! Your final score is " + score
        : "Losser! Your final score is " + score;
    
    return finalResult;
}
        

console.log(game());
    
    
