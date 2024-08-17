function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice;
  do {
    choice = prompt("Rock, paper or scissors?").toLowerCase();
  } while ((choice !== "rock" && choice !== "paper" && choice !== "scissors"));

  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    console.clear();
    console.log(`Human chose: ${humanChoice}
    Computer chose: ${computerChoice}`);
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("Human won this round!");
    } else if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else {
      computerScore++;
      console.log("Computer won this round!");
    }

    console.log(`Current score: 
    Human: ${humanScore}
    Computer: ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();
