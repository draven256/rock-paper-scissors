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

function playRound(humanChoice, computerChoice) {
  results.textContent = ``;
  results.textContent +=
    "Human chose: " +
    humanChoice +
    "\nComputer chose: " +
    computerChoice +
    "\n";

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    results.textContent += "Human won this round!\n";
  } else if (humanChoice === computerChoice) {
    results.textContent += "Draw!\n";
  } else {
    computerScore++;
    results.textContent += "Computer won this round!\n";
  }

  results.textContent +=
    "Current score:\nHuman: " +
    humanScore +
    "\nComputer: " +
    computerScore +
    "\n";

  if (humanScore === 5 || computerScore === 5) {
    results.textContent +=
      humanScore === 5
        ? "Human has won the game!"
        : "Computer has won the game!";
    humanScore = 0;
    computerScore = 0;
  }
}

const results = document.querySelector("#results-div");
results.setAttribute("style", "white-space: pre");

let humanScore = 0;
let computerScore = 0;

const selection = document.querySelector("#selection-div");

selection.addEventListener("click", (event) => {
  playRound(event.target.id, getComputerChoice());
});
