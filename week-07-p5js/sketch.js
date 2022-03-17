// state
let starY = 0;

function setup() {
  createCanvas(300, 200);
}

function draw() {
  // clear out old frames
  background(255, 204, 100);

  // draw current frame based on state
  star(100, circleY, 50);

  // modify state
  starY = starY + 1;
}
