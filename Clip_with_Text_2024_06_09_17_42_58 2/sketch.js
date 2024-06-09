function setup() {
  // Create a canvas of size 500x500 pixels
  createCanvas(500, 500);
  // Set the background color to a dark blue
  background(0, 0, 50);
  
  // Create an additional graphics layer
  let cnv3 = createGraphics(width, height);
  // Disable stroke to avoid borders around shapes
  cnv3.noStroke();
  // Set the fill color to a light gray for contrast
  cnv3.fill("#FFD700"); // Changed to gold
  
  // Scale the next shapes to be drawn larger
  scale(1.2);
  // Draw a rectangle instead of an ellipse
  cnv3.rect(100, 150, 300, 200); // Position and dimensions of the rectangle
  
  // Use the erase function to create a cut-out effect for the text
  cnv3.erase();
  
  // Setting the text characteristics for the first line
  cnv3.textSize(26); // Font size for the first text
  cnv3.text('good night', 120, 220); // Positioning the first text
  
  // Setting the text characteristics for the second line
  cnv3.textSize(24); // Font size for the second text
  cnv3.text('maryam manzoor', 90, 270); // Positioning the second text
  
  // Stop erasing to return to normal drawing mode
  cnv3.noErase();
  
  // Draw the graphics layer onto the main canvas
  image(cnv3, 70, 0); // Positioning the graphics layer
}
