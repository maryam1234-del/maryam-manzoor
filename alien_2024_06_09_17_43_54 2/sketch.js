function setup() {
  createCanvas(400, 400); // Set the canvas size
  noLoop(); // Disable looping since we don't need animation
}

function draw() {
  background(255); // Set background color to white
  
  // Draw the alien's head
  fill(255, 0, 0); // Set the color to red
  ellipse(200, 200, 150, 180); // Draw an ellipse for the head

  // Draw the alien's eyes
  fill(0); // Set the color to black
  ellipse(170, 180, 30, 50); // Left eye
  ellipse(230, 180, 30, 50); // Right eye

  // Draw the pupils
  fill(255, 0, 0); // Set the color to red
  ellipse(170, 180, 10, 20); // Left pupil
  ellipse(230, 180, 10, 20); // Right pupil

  // Draw the mouth
  fill(139, 0, 0); // Set a darker red color for the bloody effect
  arc(200, 220, 80, 50, 0, PI); // Drawing an arc for the mouth

  // Draw the dripping blood from the mouth
  fill(255, 0, 0); // Set the color back to bright red for the blood
  triangle(200, 270, 190, 250, 210, 250); // A small triangle representing dripping blood

  // Draw the alien's antenna
  stroke(255, 0, 0); // Set the stroke color to red
  line(200, 110, 200, 150); // Draw a line for the antenna from the head top

  // Draw the tip of the antenna
  noStroke(); // Disable stroke for the circle
  fill(0); // Set the color to black
  ellipse(200, 105, 10, 10); // A small circle at the top of the antenna
}
