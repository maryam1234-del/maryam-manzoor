function setup() {
  createCanvas(400, 400); // Set up the canvas
  frameRate(30); // Set the frame rate to 30 frames per second for smoother animation
}

function draw() {
  background(240); // Set a light grey background to see the movement clearly

  const cols = 10; // Define the number of columns
  const rows = 10; // Define the number of rows
  const padding = 40; // Set padding around the grid

  const w = (width - padding * 2) / cols; // Calculate the width of each grid cell
  const h = (height - padding * 2) / rows; // Calculate the height of each grid cell

  // Nested loops to create the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * w + padding + random(-2, 2); // Adjust x position randomly within a small range
      const y = i * h + padding + random(-2, 2); // Adjust y position randomly within a small range
      const size = random(10, w/2); // Randomize the size of each circle

      // Randomize the color of each circle, adding transparency for visual effect
      fill(random(255), random(255), random(255), 150);

      // Draw the circle at the calculated position with the randomized size
      ellipse(x + w / 2, y + h / 2, size, size);
    }
  }
}
