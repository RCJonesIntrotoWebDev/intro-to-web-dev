function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(100);
  stroke(255);
  
  for (let lineX = 30; lineX <= 270; lineX += 30) {
    line(lineX, 0, lineX, height);
  }
}

function draw() {
  background(100);
  circle(mouseX, mouseY, 100);
}
