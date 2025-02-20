let dragon = document.getElementById("dragon");
let obstacle = document.getElementById("obstacle");
let scoreDisplay = document.getElementById("score");
let gameOverText = document.getElementById("game-over");
let score = 0;
let jumping = false;

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !jumping) {
    jump();
  }
});

const jump = () => {
  jumping = true;
  let jumpHeight = 0;
  let jumpInterval = setInterval(() => {
    if (jumpHeight >= 100) {
      clearInterval(jumpInterval);
      let fallInterval = setInterval(() => {
        if (jumpHeight <= 0) {
          clearInterval(fallInterval);
          jumping = false;
        }
        jumpHeight -= 5;
        dragon.style.bottom = jumpHeight + "px";
      }, 20);
    }
    jumpHeight += 5;
    dragon.style.bottom = jumpHeight + "px";
  }, 20);
};

setInterval(() => {
  let dragonBottom = parseInt(
    window.getComputedStyle(dragon).getPropertyValue("bottom")
  );
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("right")
  );

  if (obstacleLeft >= 450 && obstacleLeft <= 550 && dragonBottom <= 50) {
    if (score >= 0) {
      score--;
      scoreDisplay.innerText = "Score: " + score;
    }
    gameOver();
  } 
}, 100);
setInterval(() => {
  let dragonBottom = parseInt(
    window.getComputedStyle(dragon).getPropertyValue("bottom")
  );
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("right")
  );

  if (obstacleLeft >= 400 && obstacleLeft <= 550 && dragonBottom <= 50) {
    score++;
    scoreDisplay.innerText = "Score: " + score;
  }
}, 200);

const gameOver = () => {
  gameOverText.classList.remove("hidden");
  obstacle.style.animation = "none";
  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      location.reload();
    }
  });
};
