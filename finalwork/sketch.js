// 最終課題を制作しよう

let balls = [];
let stars = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function star(cx, cy, r){
  beginShape();
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}


function draw(){
  background(0);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(random(255), random(255), random(255), 90);
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  const b = {
    x: random(width),
    y: random(1/10 *height),
    size: random(1/1000 * width, 1/100 * width),
    vx: cos(random(TWO_PI)),
    vy: 2};
  balls.push(b);

  for(let i = 0; i < stars.length; i++){
    let s = stars[i];
    fill(248, 255, 54, 90);
    star(s.x, s.y, s.size);
    s.x += s.vx;
    s.y += s.vy;
  }
  if(keyIsDown(" ".charCodeAt(0))){ const s = {
      x: random(width),
      y: random(1/10 *height),
      size: random(1/1000 * width, 1/200 * width),
      vx: 10 * random(1),
      vy: 2};
    stars.push(s);
}
}




function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
