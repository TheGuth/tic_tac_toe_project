// Pseudo Code:

// Tic Tac Toe with Jquery: 

// use grid of 3 columns with 3 div boxes inside each column 

// set up 3 by 3 grid to an array in jquery.

// prompt user to pick x's or O's. 

// Jquery event listener for each box.

// If box is clicked on put user's input choice (x or o)

// |||||||||||||||||||||||||||||||||||||||||||||||||||||

var gridArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

var state = {
  grid: gridArray,
  currentChoice: 'x',
  choiceAlternator: function() {
    if (this.currentChoice === 'x') {
      this.currentChoice = 'o';
    } else {
      this.currentChoice = 'x';
    }
  },

  winConditions: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],

  checkWinner: function() {
    state.winConditions.forEach(function(array) {
      if (state.winnerX(array)) {
        state.winner = "X Won!";
      } else if (state.winnerO(array)) {
        state.winner = "O Won!";
      } 
    });
  },

  winnerX: function(array) {
    var count = 0;

    var hello = array.forEach(function(gridNumber) {
      if (state.grid[gridNumber - 1] === 'x') {
        count += 1;
      } 
    });

    if (count === 3) {
        return true;
      } else {
        return false;
      }
  },

  winnerO: function(array) {
    var count = 0;

    var hello = array.forEach(function(gridNumber) {
      if (state.grid[gridNumber - 1] === 'o') {
        count += 1;
      } 
    });

    if (count === 3) {
        return true;
      } else {
        return false;
      }
  },

  winnerQuestion: function() {
    if (this.winner === "X Won!") {
      this.displayWinner();
    } else if (this.winner === "O Won!") {
      this.displayWinner();
    } else if (this.tie()) {
      this.displayWinner();
    }
  },

  tie: function() {
    var count = 0;
    this.grid.forEach(function(element) {
      if (element === 'x' || element === 'o') {
        count += 1;
      }
    });

    if (count === this.grid.length) {
      this.winner = "It's a Tie";
      return true;
    } else {
      return false;
    }
  },

  displayWinner: function() {
    $('.message').removeClass('hidden');
    $('.current-winner').text(state.winner);
  },

  winner: '',

  resetGame: function() {
    this.winner = '';
    this.grid = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    $('.message').addClass('hidden');
    $('li').removeClass('o-marker');
    $('li').removeClass('x-marker');
  }

}







function initializeEventListeners() {

  $('ul').on('click', 'li', function(e) {
    var currentGridChoice = $(this).attr('class');
    var currentGridChoice = Number(currentGridChoice);

    $(this).addClass(state.currentChoice + "-marker");
    state.grid[currentGridChoice - 1] = state.currentChoice;
    state.choiceAlternator();
    state.checkWinner();
    state.winnerQuestion();
  });

  $('footer').on('click', 'button', function() {
    state.resetGame();
  });
}


$(function() {
  initializeEventListeners();

});