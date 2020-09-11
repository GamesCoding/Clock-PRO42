var h,m,s;

var sAngle, mAngle, hAngle;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  

  s = second();
  m = minute();
  h = hour();

  sAngle = map(s-15,0,60,0,360);
  mAngle = map(m-15,0,60,0,360);
  hAngle = map(h-3,0,12,0,360);

  angleMode(DEGREES);

  push();
  translate(200,200);
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,125,0);
  pop();

  push();
  translate(200,200);
  rotate(mAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  translate(200,200);
  rotate(hAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  strokeWeight(10)
  stroke("red");
  noFill();
  arc(200, 200, 350, 350, 990, sAngle);
  pop();

  push();
  strokeWeight(10)
  stroke("green");
  noFill();
  arc(200, 200, 325, 325, 990, mAngle);
  pop();
  
  push();
  strokeWeight(10)
  stroke("blue");
  noFill();
  arc(200, 200, 300, 300, 990, hAngle);
  pop();

  drawSprites();
}