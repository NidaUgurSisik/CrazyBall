var x=0;
var y=0;
var speed=5;
var r=0;
var g=0;
var b=0;
function setup() {
  createCanvas(332, 497);
}

function draw() {
  
  background(0,0,0,75);
  
  stroke(r,g,b);
  strokeWeight(5);
  fill(r,g,b);
  ellipse(x,y,50,50);
  
  if(x+25 > width){
    speed=-10;
  r=random(0,255);
  g=random(0,255);
  b=random(0,255);
  }
  if(x<25)
  {
  speed=10;
  r=random(0,255);
  g=random(0,255);
  b=random(0,255);
  }
  x=x+speed;
  
  if(y+25 > height){
    speedy=-6;
  r=random(0,255);
  g=random(0,255);
  b=random(0,255);
  }
  if(y<25)
  {
  speedy=6;
  r=random(0,255);
  g=random(0,255);
  b=random(0,255);
  }
  y=y+speedy;
  
}