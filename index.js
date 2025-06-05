const allBtns = document.querySelectorAll('button');
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const div = document.querySelector("#game");
const pScore = document.querySelector("#update-player-score");
const cScore = document.querySelector("#update-computer-score");
const result = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
            let computerGuessInt = Math.floor(Math.random() * 3);

            let computerGuess;
            if (computerGuessInt == 0) {
                computerGuess = "✊";
            }
            else if (computerGuessInt == 1) {
                computerGuess = "🖐️";
            }
            else {
                computerGuess = "✌️";
            }

            return computerGuess;
}

function playRound(humanChoice, computerChoice) {
                if (humanChoice === computerChoice) {
                    playerScore++;
                    computerScore++;
                    console.log("It's a tie!");
                    div.textContent = `Computer choice: ${computerChoice} | Your Choice: ${humanChoice}. It's a tie!`;
                    pScore.textContent = playerScore;
                    cScore.textContent = computerScore;
                } else if (
                    (humanChoice === "✊" && computerChoice === "✌️") ||
                    (humanChoice === "🖐️" && computerChoice === "✊") ||
                    (humanChoice === "✌️" && computerChoice === "🖐️")
                ) {
                    playerScore++;
                    console.log("You win!");
                    div.textContent = `Computer choice: ${computerChoice} | Your Choice: ${humanChoice}. You win!`;
                    pScore.textContent = playerScore;
                    cScore.textContent = computerScore;
                } else {
                    computerScore++;
                    console.log("You lose!");
                    div.textContent = `Computer choice: ${computerChoice} | Your Choice: ${humanChoice}. You Lost!`;
                    pScore.textContent = playerScore;
                    cScore.textContent = computerScore;
                }
    
                pScore.textContent = playerScore;
                cScore.textContent = computerScore;
                if (playerScore == '5' || computerScore == '5') {
                    rockBtn.disabled = true;
                    paperBtn.disabled = true;
                    scissorsBtn.disabled = true;
                    if (playerScore === computerScore) {
                        result.textContent = "It's a tie!";
                    }
                    else if (playerScore > computerScore) {
                        result.textContent = "You win the game!";
                    }
                    else {
                        result.textContent = "You lose the game!";
                    }
                    setTimeout(() => {
                        playerScore = 0;
                        computerScore = 0;
                        pScore.textContent = playerScore;
                        cScore.textContent = computerScore;
                        div.textContent = "";
                        result.textContent = "";
                        rockBtn.disabled = false;
                        paperBtn.disabled = false;
                        scissorsBtn.disabled = false;
                    }, 2000);
                }

}

rockBtn.addEventListener('click', () =>{
    playRound("✊", getComputerChoice());
});
paperBtn.addEventListener('click', () =>{
    playRound("🖐️", getComputerChoice());
});
scissorsBtn.addEventListener('click', () =>{
    playRound("✌️", getComputerChoice());
});

