// state
let circleY = 0;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  // clear out old frames
  background(32);

  // draw current frame based on state
  circle(100, circleY, 50);

  // modify state
  circleY = circleY + 1;
}
