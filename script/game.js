function startNewGame() {
  if (player[0].name === "" || player[1].name === "") {
    alert("Enter your name to start");
    return;
  }
  if (statuss) {
    resetGame();
    return;
  }
  gameArea.style.display = "block";
}

function resetGame() {
  statuss = false;
  currentWinner = "";
  editPlayer = 0;
  activePlayer = 0;
  round = 0;
  let temp = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let perElement = board.children[temp];
      perElement.textContent = "";

      temp++;
      perElement.classList.remove("disabled");
    }
  }
  gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  console.log(gameBoard);
  over.style.display = "none";
}

function updateBoard(e) {
  if (e.target.tagName != "LI") {
    return;
  }
  let targetE = e.target;
  let col = targetE.dataset.col;
  let row = targetE.dataset.row;
  if (gameBoard[row][col] !== 0) {
    return;
  }
  round++;
  targetE.textContent = player[activePlayer].symbol;
  targetE.classList.add("disabled");

  gameBoard[row][col] = activePlayer + 1;
  if (checkGameOver() === 1 || checkGameOver() === 2) {
    over.style.display = "block";
    statuss = true;
    winnerName.textContent = player[activePlayer].name;
    currentWinner = player[activePlayer].name;
    return;
  }
  if (round === 9) {
    statuss = true;
    over.style.display = "block";
    over.firstElementChild.textContent = "Draw";
    return;
  }
  swithPlayer();
  activePlayerName.textContent = player[activePlayer].name;
}

function swithPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function checkGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] > 0 &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2]
    ) {
      return gameBoard[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[0][i] > 0 &&
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[1][i] === gameBoard[2][i]
    ) {
      return gameBoard[0][i];
    }
  }
  if (
    gameBoard[0][0] > 0 &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }
  if (
    gameBoard[0][2] > 0 &&
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0]
  ) {
    return gameBoard[0][2];
  }
}
