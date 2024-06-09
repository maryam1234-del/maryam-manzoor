let cat;
let obstacles = [];
let gameOver = false;
let gameStarted = false;
let stamina = 100;
let winTime = 1800; // Time to survive to win, in frames

function setup() {
  createCanvas(600, 400);
  cat = new Cat();
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); // Set background to black

  if (!gameStarted) {
    showTitleScreen();
    return;
  }

  if (gameOver) {
    showGameOverScreen();
    return;
  }

  // Update and display the cat
  cat.update();
  cat.display();

  // Handle obstacles
  manageObstacles();

  // Display and update stamina
  drawStaminaBar();

  // Check win condition
  if (frameCount >= winTime) {
    gameOver = true;
    fill(0, 255, 0);
    text("YOU WIN!", width / 2, height / 2);
  }
}

function manageObstacles() {
  if (frameCount % 60 === 0) {
    obstacles.push(new Obstacle());
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].display();

    if (obstacles[i].hits(cat)) {
      gameOver = true;
      fill(255, 0, 0);
      text("YOU LOSE!", width / 2, height / 2);
      noLoop(); // Stop drawing frames
    }

    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (!gameStarted || gameOver) {
      resetGame();
    }
  }
}

function showTitleScreen() {
  fill(255);
  text("Cat Dodger", width / 2, height / 2 - 20);
  text("Press ENTER to start", width / 2, height / 2 + 20);
}

function showGameOverScreen() {
  text(" YOU WIN!!!!! . Press ENTER to restart", width / 2, height / 2);
}

function resetGame() {
  gameStarted = true;
  gameOver = false;
  obstacles = [];
  stamina = 100;
  frameCount = 0; // Reset frame count for timing the game
  loop(); // Restart the drawing loop
}

function drawStaminaBar() {
  fill(50);
  rect(10, 10, 100, 20);
  fill(0, 255, 0);
  rect(10, 10, stamina, 20);
}

function Cat() {
  this.x = width / 2;
  this.y = height - 50;
  this.width = 50;
  this.height = 50;

  this.display = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.width, this.height);
  };

  this.update = function() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= 5;
      stamina = max(0, stamina - 0.5);
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width) {
      this.x += 5;
      stamina = max(0, stamina - 0.5);
    }
    if (stamina < 100) stamina += 0.2; // Recharge stamina when not moving
  };
}

function Obstacle() {
  this.x = random(width);
  this.y = 0;
  this.size = random(20, 40);

  this.display = function() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);
  };

  this.update = function() {
    this.y += 5;
  };

  this.hits = function(cat) {
    return (cat.x < this.x + this.size && cat.x + cat.width > this.x &&
            cat.y < this.y + this.size && cat.y + cat.height > this.y);
  };

  this.offscreen = function() {
    return this.y > height;
  };
}

