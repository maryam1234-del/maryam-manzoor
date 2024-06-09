function setup() {
  createCanvas(400, 200);
  background(220);
}

function draw() {
  background(220); // Setting the background color to light grey

  // Body of the car - bottom part
  fill(173, 216, 230); // Light blue color
  rect(50, 110, 200, 40);
  
  // Top of the car - the cabin
  fill(0, 0, 255); // Blue color
  rect(80, 80, 140, 30);
  
  // Front bumper
  fill(173, 216, 230); // Light blue color
  rect(50, 130, 30, 20);

  // Rear bumper
  rect(220, 130, 30, 20);

  // Windows - using slightly darker blue for contrast
  fill(100, 149, 237); // Cornflower blue
  rect(90, 85, 40, 20);
  rect(170, 85, 40, 20);

  // Wheels
  fill(0); // Black color for the wheels
  ellipse(80, 150, 30, 30);  // Left front wheel
  ellipse(220, 150, 30, 30); // Right front wheel
  ellipse(100, 150, 30, 30);  // Left rear wheel
  ellipse(200, 150, 30, 30); // Right rear wheel
}

function mouseClicked() {
  // Change the background color randomly when the canvas is clicked
  background(random(255), random(255), random(255));
}
