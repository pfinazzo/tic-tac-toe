/*----- constants -----*/
$(function () {
  var board = new Array(9).fill(null);
  var turn;

  /*----- app's state (variables) -----*/
  var player1 = "X";
  var player2 = "O";

  /*----- cached element references -----*/
  var cell0 = $('#0');
  var cell1 = $('#1');
  var cell2 = $('#2');
  var cell3 = $('#3');
  var cell4 = $('#4');
  var cell5 = $('#5');
  var cell6 = $('#6');
  var cell7 = $('#7');
  var cell8 = $('#8');
  var resetButton = $('#restart');

  /*----- event listeners -----*/
  $('table').on('click', ".cell", function () {
    console.log($(this).text());
    if ($(this).text()) {
      return;
    }
    if (turn === player1) {
      $(this).text('X');
    } else {
      $(this).text('Y');
    }
    board[$(this).attr('id')] = turn;
    checkForWinner();
    switchTurn();
  });

  $('#restart').on('click', init);

  /*----- functions -----*/
  function init() {
    turn = player1;
    board.textContent = [];
  };

  function switchTurn() {
    if (turn === player1) {
      turn = player2;
    } else {
      turn = player1;
    }
  };
  
function checkForWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    lines.forEach(function (arr, idx) {
      var first = lines[idx][0];
      var second = lines[idx][1];
      var third = lines[idx][2];
      if (board[first] && board[first] === board[second] && board[first] === board[third]) {
        console.log('winner');
        init();
      }
   });
  }
  init();
});
