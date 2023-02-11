const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 700;
let fibs = [1,1];
let scale = 1;
const brightColors = [
  '#506aa1', // blue
  '#be574b', // red
  '#bea456', // yellow
  '#59864b', // green
  '#c27d4d', // orange
  '#635f9b', // purple
];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  angleMode(DEGREES);
  initFibs();
}

function draw() {
  // start at middle of canvas
  background(200);
  translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);

  let colorIndex = 0;
  
  for (let i = 0; i < fibs.length; i++) {
    const fib = fibs[i] * scale;

    fill(color(brightColors[colorIndex]));
    rect(0, 0, fib, fib);
    // ellipse(0,0,fib,fib);
    arc(fib, 0, 2*fib, 2*fib, 90, 180);
    translate(fib, fib);
    rotate(-90);

    if (colorIndex < 5) {
      colorIndex++;
    } else {
      colorIndex = 0;
    }
  }

  scale *= 0.99;
}

function generateNextFib() {
  const fibsLen = fibs.length;

  fibs.push(fibs[fibsLen-1] + fibs[fibsLen-2]);
}

function initFibs() {
  for (let i = 0; i < 200; i++) {
    generateNextFib();
  }
}

