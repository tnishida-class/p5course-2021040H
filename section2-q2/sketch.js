// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  stroke(100);

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if( (i + j) % 2 == 1){
        fill(112, 125, 135);
      }
      else{
        noFill();
      }
      rect(size * i, size * j, size, size);
      fill(255, 0, 0);
      if( (i + j) % 2 == 1 && j < 3){
        circle(size * i + 0.5 * size, size * j + 0.5 * size, 0.88 * size);
      }
      fill(0, 0, 0);
      if( (i + j) % 2 == 1 && 4 < j){
        circle(size * i + 0.5 * size, size * j + 0.5 * size, 0.88 * size);
      }
    }
  }
}
