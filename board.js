class board {
  constructor(x, y, w, h, fColor, bColor, fHovCol, bHovCol) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fColor = fColor;
    this.bColor = bColor;
    this.fHovCol = fHovCol;
    this.bHovCol = bHovCol;
    this.grid = [
      [5, 4, 3, 1, 2, 3, 4, 5], //black pieces
      [6, 6, 6, 6, 6, 6, 6, 6], //1 king
      [0, 0, 0, 0, 0, 0, 0, 0], //2 queen
      [0, 0, 0, 0, 0, 0, 0, 0], //3 bishup
      [0, 0, 0, 0, 0, 0, 0, 0], //4 knight
      [0, 0, 0, 0, 0, 0, 0, 0], //5 rook
      [-6, -6, -6, -6, -6, -6, -6, -6], //6 pawn
      [-5, -4, -3, -1, -2, -3, -4, -5], //white pieces
    ];
  }

  drawBoard() {
    for (let i = 0; i < this.grid.length; i++) {
      //width
      for (let j = 0; j < this.grid[i].length; j++) {
        //hight
        let x = this.x + (this.w + 1) * i;
        let y = this.y + (this.h + 1) * j;
        if (
          x <= mouseX &&
          mouseX <= x + this.w &&
          y <= mouseY &&
          mouseY <= y + this.h
        ) {
          //hover over tile changes color
          stroke(this.fHovCol);
          fill(this.bHovCol);
        } else {
          stroke(this.fColor);
          fill(this.bColor);
        }
        rect(x, y, this.w, this.h);
      }
    }
  }
  disp() {
    this.drawBoard();
  }
}
