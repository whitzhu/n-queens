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
  
  var solution = [];
  var row = [];
  // for (var i = 0; i < n; i++) {
  //   row.push(0);
  //   solution.push(row);
  // }

  var solution = [];
  for ( var i = 0; i < n; i++) {
    solution[i] = [];
    for (var j = 0; j < n; j++) {
      solution[i][j] = 0;
    }
  }

  console.log('matrix', solution);

  solution[0][0] = 1;

  var newBoard = new Board(solution);

  for (var j = 0; j < n; j++) {
    
    if (solution[j].reduce(function(acc, val) { return acc + val; }) === 1) {
      continue;
    }
    solution[j][startPoint] = 1;
    startPoint++;
  }

  // console.log('rooks conflict', Board.prototype.get(1));
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // console.log('solution', solution);
  return newBoard;
};

// return the number of nxn chessboards that exist, with n rooks placed such that 
//none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, 
//with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that 
//none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

