function setup() {
  createCanvas(400,200);
  noStroke();
}

function preload()//download image as background
{
    bg = loadImage("https://cdn.mos.cms.futurecdn.net/EohvDHJCLtELPiggFtNE4K-1200-80.jpg")
}

function draw() {
 background(255,153,255);
  
  //background(bg)
  
  push()
  fill(color(0,0,255))
  triangle(0,200,120,60,180,200);
  fill(color(0,0,204))
  triangle(220,185,120,60,180,200);
  pop()
  
  push()
  fill(color(127,0,255))
  triangle(180,200,250,100,290,200);
  fill(color(102,0,204))
  triangle(310,190,250,100,290,200);
  pop()
  
  push()
  fill(color(255,0,255))
  triangle(290,200,325,140,350,200);
  fill(color(204,0,204))
  triangle(362,192,325,140,350,200);
  pop()
}