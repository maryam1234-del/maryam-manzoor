let x, y; // Position variables for the text
let textColor; // Variable to store text color
let particles = []; // Array to store particles

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas that fits the screen
  x = width / 2; // Initialize text x-position to center
  y = height / 2; // Initialize text y-position to center
  textAlign(CENTER, CENTER); // Center align the text
  textSize(64); // Set text size to 64 for larger text
  textColor = color(0); // Initialize text color to black

  // Create particles
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  // Set royal blue background
  background(65, 105, 225);

  // Display sparkling particles
  for (let particle of particles) {
    particle.update();
    particle.display();
  }

  fill(textColor); // Set text color

  // Check if mouse is over the text
  if (
    mouseX > x - textWidth("Bathspa University") / 2 &&
    mouseX < x + textWidth("Bathspa University") / 2 &&
    mouseY > y - 16 &&
    mouseY < y + 16
  ) {
    textColor = color(255, 215, 0); // Change text color to gold
  } else {
    textColor = color(255); // Change text color to white
  }

  text("Bathspa University", x, y); // Display the text at x, y
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize the canvas when the window is resized
}

// Particle class
class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(1, 5);
    this.speed = random(1, 3);
  }

  update() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

