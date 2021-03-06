/*----- constants -----*/
$(function () {
  var board = new Array(9).fill(null);
  var turn;
  var player1color;
  var player2color;
  // declaring an array with 9 spots waiting to receive values
  // declaring another (kind of but not technically "global") variable

  /*----- app's state (variables) -----*/
  var player1 = ({"background-color": /*`${player1color}`*/ "blue"});
  var player2 = ({"background-color": /*`${player2color}`*/ "green"});

  /*----- cached element references -----*/
  var resetButton = $('#restart');

  /*----- event listeners -----*/
  $('table').on('click', ".cell", function () {
    if ($(this).text()) {
      return;
    };
    if (board[this.id]) {
      return;
    }
    turn === player1  && ($(this).css(player1) || $(this).css(player1)) ? $(this).css(player1) : $(this).css(player2);
    board[$(this).attr('id')] = turn;
    checkForWinner();
    switchTurn();
  });

  $('#restart').on('click', init);

  /*----- functions -----*/
  function init() {
    turn = player1;
    board = [null, null, null, null, null, null, null, null, null];
    $('.cell').css({"background-color": "white"});
    render();
  };
 

  function switchTurn() {
    turn === player1 ? turn = player2 : turn = player1;
  };

  function render() {
    $('td').each(function(idx, elem) {
        $(elem).text(board[idx])
    })
  }

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
        alert('winner');
        init();
      }
   });
  }
  init();
});