let editPlayer = 0;
let activePlayer = 0;
let round=0;
let player = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let statuss=false;
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const formE = document.querySelector("form");
const errors = document.getElementById("config-error");
const gameArea = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");

const editPlayer1 = document.getElementById("edit-player-1-btn");
const editPlayer2 = document.getElementById("edit-player-2-btn");
const cancelConfig = document.getElementById("cancel");
const start = document.getElementById("start-newgame");
// const board=document.querySelectorAll('#game-board li');
const board = document.getElementById("game-board");
const over = document.getElementById("game-over");
const winnerName = document.getElementById("Winner-name");

editPlayer1.addEventListener("click", openPlayerConfig);
editPlayer2.addEventListener("click", openPlayerConfig);
cancelConfig.addEventListener("click", closeConfig);
backdrop.addEventListener("click", closeConfig);
formE.addEventListener("submit", savePlayer);

start.addEventListener("click", startNewGame);

// for (const box of board) {
//     box.addEventListener('click',updateBoard);
// }
board.addEventListener("click", updateBoard);
