let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";

function play(i) {
  if (board[i] !== "") return;

  board[i] = turn;
  document.getElementsByClassName("cell")[i].innerText = turn;

  if (checkWin()) {
    document.getElementById("status").innerText = turn + " wins!";
    return;
  }

  turn = turn === "X" ? "O" : "X";
  document.getElementById("status").innerText = turn + "'s turn";
}

function checkWin() {
  let lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  for (let line of lines) {
    let [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  document.getElementById("status").innerText = "X's turn";

  let cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.innerText = "";
  }
}