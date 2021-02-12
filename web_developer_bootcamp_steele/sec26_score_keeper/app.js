const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#play-to");

let winningScore = 3;
let isGameOver = false;

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

resetButton.addEventListener("click", () => {
  resetGame();
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value); // Using arrow function causes this.value to be undefined and parseInt(this.value) to equal NaN
  resetGame();
});

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
  player.display.textContent = player.score;
}

function resetGame() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger"); // Removes classes given as argument if they exist, doesn't throw error if they don't
    p.button.disabled = false;
  }
}
