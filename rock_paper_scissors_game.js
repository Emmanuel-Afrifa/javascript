const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'bomb'){
    return userInput;
  }
  else {
    console.log('Make a valid choice');
  }
}

function getComputerChoice(){
  computerChoice = Math.floor(Math.random()*3);
  switch(computerChoice){
    case 0:
      return 'rock';
      break
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'The game was tie';
  }

  if (userChoice === 'bomb'){
    return 'The user won';
  }

  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer won';
    }
    else {
      return 'The user won';
    }
  }

  if (userChoice == 'paper'){
    if (computerChoice === 'rock'){
      return 'The user won';
    }
    else {
      return 'The computer won';
    }
  }

  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The computer won';
    }
    else {
      return 'The user won';
    }
  }
}

// bomb is a cheat. If a user inputs bomb, no matter the choice of the computer, the user win emerge as the winner.

function playGame(){
  var userChoice = getUserChoice('paper');
  var computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice} \nComputer choice: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();