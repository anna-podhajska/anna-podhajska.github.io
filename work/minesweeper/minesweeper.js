document.addEventListener('DOMContentLoaded', startGame)

var userWon = false;  //ania: var for playing win sound once

var board = {
  cells: [
    // {row:0,col:0,isMine:true, hidden:true},
    // {row:0,col:1,isMine:false, hidden:true},
    // {row:0,col:2,isMine:false, hidden:true},
    // {row:1,col:0,isMine:false, hidden:true},
    // {row:1,col:1,isMine:false, hidden:true},
    // {row:1,col:2,isMine:false, hidden:true},
    // {row:2,col:0,isMine:false, hidden:true},
    // {row:2,col:1,isMine:false, hidden:true},
    // {row:2,col:2,isMine:true, hidden:true}
  ]
}

function generateBoard(len) {   //ania: generating board above automatically
  board.cells = [];

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      board.cells.push({row:i, col:j, isMine:false, hidden:true});
    }
  }
  var mineIndex = Math.floor(Math.random()*(len*len));
  board.cells[mineIndex].isMine = true;
}
generateBoard(3);


function startGame () {
//_________ania:  waffle ticket #6.3:
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  document.getElementsByClassName('board')[0].addEventListener('click', checkForWin);
  document.getElementsByClassName('board')[0].addEventListener('contextmenu', checkForWin);
//_______________
  // the above can be done using 'for in' instead 'for' loop:
  // for (var i in board.cells) {
  //board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  // }
//________________

  // the below was already set by eda
  lib.initBoard()
}


function checkForWin (evt) {

  //ania: additional conditions added to play sound:
  if (userWon === true) {  //ania: if user already won and the sound played, do nothing
    return;
  }
  if (evt.target.classList.contains('mine')) { //ania: inspired by EDA's lib; searches for 'mine' in DOM
    document.getElementById("sound-loose").play();
  }
  else if (evt.currentTarget.className==="board") { //ania: evt.currentTarget.className is "board" taken from debugger
    document.getElementById("sound-click").play();
  }

  //________ania: waffle ticket #6.3:
 //assume that total 'mines' and total 'correctly marked' (i.e. isMine&marked) must be equal:
  var totalMines = 0;
  var totalCorrectlyMarked = 0;

  for (var i = 0; i < board.cells.length; i++) {

    if (board.cells[i].isMine && board.cells[i].isMarked) {
      totalCorrectlyMarked +=1; //ania: if a mine exists and is marked blue correctly. .Marked prop. is added by another function done by eda
    }
    else if (board.cells[i].hidden === true) {
      return;  //ania: bug in waffle task, a square can be both .isMarked=true and .hidden=true at the same time.
    }

    if (board.cells[i].isMine === true) {
      totalMines += 1;
    }
  }

  if (totalMines === totalCorrectlyMarked) {
    lib.displayMessage('You won!');
    document.getElementById("sound-win").play();
    userWon = true;
  }
}

function countSurroundingMines (cell) {
  //_______ania:
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count += 1;
    }
  }
  return count;
}
