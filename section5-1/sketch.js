
function setup(){
  createCanvas(200, 200);
  background(34, 22, 184);
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12;
    const x = 100 + cos(theta) * 50;
    const y = 100 + sin(theta) * 50;
    noStroke();
    fill(235, 232, 52);
    star(x, y, 10);
  }
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
