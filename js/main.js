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
  var player2 = ({"background-color": /*`${player2color}`*/ "yellow"});

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
      $(this).css(player1);
    } else {
      $(this).css(player2);
    }
    board[$(this).attr('id')] = turn;
    checkForWinner();
    switchTurn();
  });

  $('#restart').on('click', init);

  //$('#r0c0').on('click', selectColor)
  /*----- functions -----*/
  function init() {
    turn = player1;
    board = [null, null, null, null, null, null, null, null, null];
    $('.cell').css({"background-color": "white"});
    render();
  };
 

  function switchTurn() {
    if (turn === player1) {
      turn = player2;
    } else {
      turn = player1;
    }
  };
  // function selectColor(event, color) {
  //   player1color = $(event.target.idx).css({backgroundColor: color});
  //   if (player1color === true) {
  //     player2color = $(event.target.idx).css({backgroundColor: color});
  //   }
  // }

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