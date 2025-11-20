let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    // rock, paper, scissors
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];

}

const drawGame = () =>{
    // console.log("It's a tie!");
    // console.log("The game is a draw!");
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        // console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        // msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else{
        computerScore++;
        compScorePara.innerText = computerScore;
        // console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        // msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}


const palyGame = (userChoice) =>{
    // console.log("user choice = ", userChoice);
    // Generate computer choice -> module way of programming making function for each task
    const compChoice = genCompChoice();
    // console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
       drawGame();
    } else{
        let userWin =true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice ways clicked:" + userChoice);
        palyGame(userChoice);
    })
})