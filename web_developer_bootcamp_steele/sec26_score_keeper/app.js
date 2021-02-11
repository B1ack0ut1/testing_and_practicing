const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#play-to");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
    p1Display.textContent = p1Score; // Can innerText be assigned a number variable? Is p1Score converted to a string?
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
    p2Display.textContent = p2Score; // Can innerText be assigned a number variable? Is p1Score converted to a string?
  }
});

resetButton.addEventListener("click", () => {
  resetGame();
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value); // Using arrow function causes this.value to be undefined and parseInt(this.value) to equal NaN
  resetGame();
});

function resetGame() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner", "loser"); // Removes classes given as argument if they exist, doesn't throw error if they don't
  p2Display.classList.remove("winner", "loser");
}
