const player = {
    currentChoice: null
  };
  const computer = {
    currentChoice: null
  };
  // new object to keep track of the state
  const score = {
    computer: 0,
    player: 0
  };
  
  let round = 1;
  
  const choices = ["Lapis", "Papyrus", "Scalpellus"];
  
  player.currentChoice = choices[0];
  
  function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
  
  function incrementScore(user) {
    score[user] = score[user] + 1;
    console.log(score);
    updateScores();
  }
  
  function compareChoices() {
    computerChooses();
    if (computer.currentChoice === player.currentChoice) {
      showResult(
        "You both chose " + computer.currentChoice + ". Tie! Let's go again."
      );
      console.log("tie, no score change");
    } else if (computer.currentChoice === choices[0]) {
      if (player.currentChoice === choices[1]) {
        showResult(
          "You chose " +
            player.currentChoice +
            " to the computer's " +
            computer.currentChoice +
            ". You win! Want to go again?"
        );
        incrementScore("player");
        //  score.player = score.player + 1;
      } else {
        showResult(
          "You chose " +
            player.currentChoice +
            " to the computer's " +
            computer.currentChoice +
            ". The computer wins! Want to go again?"
        );
        incrementScore("computer");
      }
      // score.computer = score.computer + 1;
    } else if (computer.currentChoice === choices[1]) {
      if (player.currentChoice === choices[2]) {
        showResult(
          "You chose " +
            player.currentChoice +
            " to the computer's " +
            computer.currentChoice +
            ". You win! Want to go again?"
        );
        incrementScore("player");
      } else {
        showResult(
          "You chose " +
            player.currentChoice +
            " to the computer's " +
            computer.currentChoice +
            ". The computer wins! Want to go again?"
        );
        incrementScore("computer");  
    }
    } else if (computer.currentChoice === choices[2]) {
      if (player.currentChoice === choices[0]) {
        showResult(
          "You chose " +
            player.currentChoice +
            " to the computer's " +
            computer.currentChoice +
            ". You win! Want to go again?"
        );
        incrementScore("player");
      } else {
        showResult(
          "You chose " +
            player.currentChoice +
            " to the computer's " +
            computer.currentChoice +
            ". The computer wins! Want to go again?"
        );
        incrementScore("computer");  
    }
    }
  }
  
  //Dean help
  function playerClick(event) {
    console.log(event.target.innerText);
    player.currentChoice = event.target.innerText;
    console.log(player);
    compareChoices();
  }
  // Dean help
  const buttonGroupEl = document.querySelector("#buttonGroup");
  buttonGroupEl.addEventListener("click", playerClick);
  
  function showResult(result) {
    const roundEl = document.createElement("h2");
    roundEl.innerText = "Round " + round;
    const results = document.createElement("div");
    results.innerText =
      "Player choice: " +
      player.currentChoice +
      "! Computer choice: " +
      computer.currentChoice +
      "!";
    const outcome = document.createElement("p");
    outcome.innerText = result;
    document.body.appendChild(roundEl);
    document.body.appendChild(results);
    document.body.appendChild(outcome);
  
    ++round;
    console.log("round " + round);
  }
  
  function updateScores() {
    const scoreEl = document.querySelector(".scores");
  
    const computerScoreEl = scoreEl.querySelector(".computer span");
    const playerScoreEl = scoreEl.querySelector(".player span");
  
    computerScoreEl.innerHTML = score.computer;
    playerScoreEl.innerHTML = score.player;
  }
  
  updateScores();
  
  // other stuff I tried...
  
  /*function showResult(result){
    const outcome = document.createElement('p');
    outcome.innerText = result;
    document.body.appendChild(outcome);
  }*/
  
  /*
  const playerChoice = document.createElement("playerChoice");
  playerChoice.innerText = ("You chose " + player.currentChoice + ". ");
  document.body.append(playerChoice);
  
  const computerChoice = document.createElement("computerChoice");
  computerChoice.innerText = ("The computer chose " + computer.currentChoice + ".");
  document.body.append(computerChoice);
  
  const results = document.getElement("compareChoices");
  document.createElement("compareChoices");*/
  