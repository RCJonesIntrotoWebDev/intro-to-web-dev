function setup() {
  createCanvas(300, 300);
  background(32);
}

function draw() {
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 25);
  }

    for (let lineX = 75; lineX <= 143; lineX += 132) {
    line(lineX, 0, lineX, height);
  }
}

