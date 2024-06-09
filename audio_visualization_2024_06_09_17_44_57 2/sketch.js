// Declare the microphone input variable
let mic;

// Setup function: executed once when the program starts
function setup() {
  // Create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  // Do not fill shapes with color
  noFill();

  // Initialize the microphone input
  mic = new p5.AudioIn();

  // Start processing audio input
  mic.start();
}

// Draw function: continuously executes for each frame to create animation
function draw() {
  // Set the background to a dark color with a slight transparency for a trail effect
  background(10); // Nearly black

  // Get the loudness of the audio from the microphone (value between 0 and 1.0)
  let vol = mic.getLevel();

  // Map the volume to a diameter for circles (minimum 100, maximum half the width of the window)
  let diam = map(vol, 0, 1, 100, width / 2);

  // Stroke weight for the circles
  strokeWeight(2);

  // Draw multiple circles with varying opacities and colors
  for (let i = 0; i < 10; i++) {
    // Calculate the opacity decrementally as circles expand
    let alpha = map(i, 0, 9, 1, 0); // Gradually decrease opacity
    
    // Change stroke color based on volume, interpolate from black to blue
    let color = map(vol, 0, 1, 0, 255); // Volume affects color brightness

    // Set the stroke color with varying opacity
    stroke(color, 255 - color, 255, alpha * 255);

    // Draw an ellipse centered in the canvas, size increasing with 'i'
    ellipse(width / 2, height / 2, diam + i * 20);
  }
}

