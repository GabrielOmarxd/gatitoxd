let h = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
}

function draw() {
  let color = colorsys.hsv_to_rgb(h, 0.9, 1);
  h += 0.006;
  stroke(color[0] * 255, color[1] * 255, color[2] * 255);
  translate(width / 2, height / 2);
  for (let i = 0; i < 195; i++) {
    rotate(179);
    line(-i * 0.1, 0, -i * 0.1, 0);
    arc(-i * 0.1, 0, i * 0.3, i * 0.3, PI, TWO_PI);
    line(i * 0.1, 0, i * 0.1, 0);
    arc(i * 0.1, 0, i * 0.3, i * 0.3, PI, TWO_PI);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}