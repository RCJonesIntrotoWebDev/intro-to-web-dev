function setup() {
  createCanvas(300, 300);
  background(32);
}

function draw() {
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 25);
  }
