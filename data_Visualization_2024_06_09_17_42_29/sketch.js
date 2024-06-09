// Declare a variable to hold the CSV data
var table;

// Preload function to load the CSV data before the sketch starts
function preload() {
    // Load a CSV file and store it in the 'table' variable
    table = loadTable("Book.csv", "csv");
}

// Setup function to initialize the canvas and other settings
function setup() {
  createCanvas(475, 325); // Set the size of the canvas
  background(255);        // Set the background color to white
  noStroke();             // Disable drawing borders around shapes
}

// Draw function to render the visualization
function draw() {
  noLoop(); // Stops draw function from looping, ensuring data is drawn only once
  
  push(); // Save the current drawing settings
  textSize(18); // Set text size for the title
  textStyle(BOLD); // Set text style to bold for the title
  text('Temperature week of norway', 50, 50); // Display the title

  textSize(14); // Set text size for data labels
  textStyle(NORMAL); // Set text style to normal for data
  translate(0, 275); // Move the origin to start drawing bars from the bottom

  // Assuming the second row contains data values (first row after the header)
  var data = table.getRow(1).arr;
  for (let i = 0; i < table.getColumnCount(); i++) {
    // Map data values to a suitable range for rectangle heights
    var rectHeight = map(data[i], 98.6, 101.2, 25, 175);

    translate(i * 50 + 50, 0); // Move right before drawing each bar

    // Map data values to a range between 0 and 1 for color interpolation
    let lerpAm = map(data[i], 98.6, 101.2, 0, 1);
    // Interpolate color from blue to red based on temperature value
    var lerpCol = lerpColor(color(64, 126, 214), color(237, 40, 59), lerpAm);

    fill(lerpCol); // Set the fill color for the bar
    textAlign(CENTER); // Align text to the center for labels
    rect(0, 0, 40, -rectHeight); // Draw the rectangle for data visualization
    text(data[i], 20, -rectHeight - 10); // Display the temperature value above each bar

    fill(0); // Set fill color to black for text labels
    // Display the date below each bar
    text(table.getRow(0).arr[i], 20, 20);
  }
  pop(); // Restore the original drawing settings
}
