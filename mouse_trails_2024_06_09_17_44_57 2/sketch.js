let particles = [];

function setup() {
  createCanvas(400, 400);
  background(0); // Set the background to black
}

function draw() {
  background(0, 0, 0, 25); // Semi-transparent black background for fading trail effect

  // Create a new particle at the current mouse position
  particles.push(new Particle(mouseX, mouseY));

  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isFinished()) {
      // Remove this particle
      particles.splice(i, 1);
    }
  }
}

// Particle class
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255; // Full opacity initially
    this.size = random(10, 20); // Random size for visual variety
  }

  update() {
    this.x += random(-2, 2); // Random slight movement to create dynamic effect
    this.y += random(-2, 2);
    this.alpha -= 5; // Decrease opacity to fade out
  }

  display() {
    noFill(); // No fill for the outline only
    const outlineColor = lerpColor(color(255, 0, 0, this.alpha), color(0, 0, 255, this.alpha), this.alpha / 255);
    stroke(outlineColor); // Outline color transitions from red to blue
    strokeWeight(3); // Set outline thickness
    rect(this.x, this.y, this.size, this.size); // Draw square
  }

  isFinished() {
    return this.alpha < 0; // Check if the particle is fully faded out
  }
}
