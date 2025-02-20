// Tic-Tac-Toe Game

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const createBoard = () => {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = "";
  board.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    if (cell) cellElement.classList.add("taken");
    cellElement.textContent = cell;
    cellElement.addEventListener("click", () => makeMove(index));
    boardElement.appendChild(cellElement);
  });
};

const makeMove = (index) => {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  createBoard();

  if (checkWinner()) {
    document.getElementById(
      "status"
    ).textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    document.getElementById("status").textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById(
    "status"
  ).textContent = `Player ${currentPlayer}'s turn`;
};

const checkWinner = () => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winPatterns.some((pattern) => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
};

const resetGame = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").textContent = "Player X's turn";
  createBoard();
};

createBoard();
