/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks 
//placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  console.log('n is', n);
  var keepGoing = true;
  var solution = [];
  var newBoard = new Board({n: n});
  var populateBoard = function(rounds) {
    if (rounds === n) {
      keepGoing = false;
      solution = newBoard.rows().map(function(x) {
        return x.slice();
      });
      return;
    }
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(rounds, i);
      if (!newBoard.hasAnyRooksConflicts()) {
        populateBoard(rounds + 1);
      }

      if ( keepGoing ) {
        newBoard.togglePiece(rounds, i);
      }
    }
  };

  populateBoard(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that 
//none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var newBoard = new Board({n: n});
  var populateBoard = function(rounds) {
    if (rounds === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(rounds, i);
      if (!newBoard.hasAnyRooksConflicts()) {
        populateBoard(rounds + 1);
      }
      newBoard.togglePiece(rounds, i);
    }
  };
  populateBoard(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, 
//with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var keepGoing = true;
  var solution = [];
  var newBoard = new Board({n: n});
  var populateBoard = function(rounds) {
    if (rounds === n) {
      keepGoing = false;
      solution = newBoard.rows().map(function(x) {
        return x.slice();
      });
      return;
    }
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(rounds, i);
      if (!newBoard.hasAnyQueensConflicts()) {
        populateBoard(rounds + 1);
      }

      if ( keepGoing ) {
        newBoard.togglePiece(rounds, i);
      }
    }
  };

  if ( n > 1 && n < 4 ) {
    solution = newBoard.rows();
  } else {
    populateBoard(0); 
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that 
//none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var newBoard = new Board({n: n});
  var populateBoard = function(rounds) {
    if (rounds === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(rounds, i);
      if (!newBoard.hasAnyQueensConflicts()) {
        populateBoard(rounds + 1);
      }
      newBoard.togglePiece(rounds, i);
    }
  };
  populateBoard(0);


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

