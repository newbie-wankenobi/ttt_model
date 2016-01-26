console.log("main.js loaded!");

/* MODEL */

var won = false;
var currentPlayer = "x";
var board = [
  "","","", // 0,1,2
  "","","", // 3,4,5
  "","","", // 6,7,8
];

// 1. START THE GAME
// 2. MOVE (CHANGES TURN)
// inputs:
//    -whose turn it is,
//    -what cell

//  outputs:
//   -fill in cell with the right player
//   -calculate if there is a winner
//   -turn changes

var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon () {
    won = true;
  } else {
    (currentPlayer === "X") {
    currentPlayer = "0";
    } else {
      currentPlayer = "X";
    }
    // currentPlayer = (currentPlayer === "X" ? "0" : "X");
  }
};

// 3. WIN THE GAME
var gamewon =function() {};
