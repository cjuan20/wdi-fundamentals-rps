////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move === null) ? getInput() : move /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move === null) ? randomPlay() : move /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if ((playerMove == "rock" && computerMove == "scissors") || (playerMove == "paper" && computerMove == "rock") || (playerMove == "scissors" && computerMove == "paper")) {
        winner = "player";

    } else if ((computerMove == "rock" && playerMove == "scissors") || (computerMove == "paper" && playerMove == "rock") || (computerMove == "scissors" && playerMove == "paper")) {
        winner = "computer";

    } else {
        winner = "tie";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
    
   for (var round = 1; round <= 5; round++) {
       var playerMove = null;
       var computerMove = null;
       playerMove = getPlayerMove (playerMove);
       computerMove = getComputerMove (computerMove);
       console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    
        var winner = getWinner(playerMove, computerMove);
       if (winner == "player"){
            playerWins +=1;
        }else if (winner == "computer") {
            computerWins +=1;
        }
       console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}


//If you are interested in an additional challenge, try writing another function 
// called playTo(x) that allows us to play Rock Paper Scissors until either the 
//player or the computer has won x times. Feel free to steal liberally from playToFive().
function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
   for (var round = 1; round <= x; round++) {
       var playerMove = null;
       var computerMove = null;
       playerMove = getPlayerMove (playerMove);
       computerMove = getComputerMove (computerMove);
       console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    
        var winner = getWinner(playerMove, computerMove);
       if (winner == "player"){
            playerWins +=1;
        }else if (winner == "computer") {
            computerWins +=1;
        }
       console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}


playTo(5)
