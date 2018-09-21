function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
	noStroke();
	strokeCap(SQUARE);
	
	//blue square
	fill(0,0,255);
	rect(0,320,80,80);
	
	//red square
	fill(255,0,0);
	rect(80,0,320,320);
	
	//yellow square
	fill(255,255,0);
	rect(370,360,30,40);
	
	stroke(0);
	strokeWeight(10);
	line(80,0,80,400);//left line
	line(370,320,370,400);//roight line
	line(0,320,400,320)//middle line
	
	strokeWeight(15)
	line(370,360,400,360);//bottom
	
	strokeWeight(20);
	line(0,160,80,160);
	
}
