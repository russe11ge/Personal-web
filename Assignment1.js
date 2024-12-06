function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255,255,255);
  
  push();
  fill("grey");
  rotate(PI/4);
  ellipse(285,0,100,200);
  pop();
  
  push();
  fill("white");
  stroke("black");
  translate(0,-115,0)
  circle(200,200,100);
  stroke("black");
  strokeWeight(3);
  line(200,150,200,250);
  line(150,200,250,200);
  line(165,165,235,235);
  line(235,165,165,235);
  line(180,155,220,245);
  line(220,155,180,245);
  line(155,180,245,220);
  line(245,180,155,220);
  pop();

  fill("black")
  
  push();
  fill("black");
  circle(200,200,50); 
  pop();
  
}