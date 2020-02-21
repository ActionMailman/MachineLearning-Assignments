this.focus();// means you don't have to click on the canvas to use the keyboard

let g;
let a;
function setup() {
  createCanvas(400, 400);
  let inset = 40;
  let columns = 10;
  let rows = columns;
  /* Optional: The number of columns and rows is the same because
     the canvas width and height are the same.  But if the canvas
     width and height are different, things break. Change the gridSize      calculation so that it builds square cells to fit the 
     larger dimension. */
  let cellSize = (width - 2 * inset) / columns;
  g = new Grid(columns, rows, cellSize, inset);

  a = new Agent(5, 5);
  c = new Currency(4, 4, "bitcoin", 1, 0.1, 1);
  g.drawAgent(a);

}

function draw() {
  background(220);
//  g.addStuff(a);
  g.draw();
  g.drawAgent(a);
  g.drawCurrency(c);

    if (c.col == a.col && c.row == a.row) {
      c.drawInfo();
    }
}

/* Modify this code so that left and right work as well 
There are two ways to do this, pick one, but study the other to make sure you understand them both. 
*/
function keyPressed() {
  if (keyCode === UP_ARROW) a.moveUp();
  else if (keyCode === DOWN_ARROW) a.moveDown();
  else if (keyCode === RIGHT_ARROW) a.moveRight();
  else if (keyCode === LEFT_ARROW) a.moveLeft();

} 
/*
function keyPressed() {
  switch (keyCode) {
    case UP_ARROW: a.moveUp(); break;
    case DOWN_ARROW: a.moveDown(); break;
  }
  */
