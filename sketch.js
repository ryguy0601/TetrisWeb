function setup() {
	createCanvas(screen.width, screen.height);
  }
  
  function draw() {
	if (mouseIsPressed) {
	  fill(0);
	} else {
	  stroke(255);
	  fill(255);
	}
	ellipse(mouseX, mouseY, 80, 80);
  }