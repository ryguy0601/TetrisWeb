let rectangle;
let pieces;
//global vars

function setup() {
  createCanvas(window.innerWidth - 10, window.innerHeight - 25);
  rectangle = new board(100, 100, 50, 50, "#000000","#ff00ff","#ffffff","#aa00aa");
  pieces = loadImage('imgs/pieces.png');
}

function draw() {

  rectangle.disp();
  image(pieces,0,0)
}

function keyPressed() {
  if (key == "e") {
    background("#222222");
  }
}
