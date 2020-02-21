/* This class just keeps track of an agent's position and colors it red.

   Definitely add a moveLeft and moveRight method.
   Consider changing the agen'ts color, or better yet, load an image!
   
   How can you prevent the agent from going off the grid.
   
   
*/
class Agent {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.color = color(random(255), random(255), random(255));
  }

  moveUp() {
    // only do this if the row is 0 this assumes a wall around the grid,
    // Optional: what if the grid 'wrapped' and you came back from below.
    // Optional: or what if the grid went on infinitely in all four directions?
    if (this.row > 0) {
    this.row--;
    }
  }

  moveDown() {
    /* only do this if the row is the max number of columns int grid.
    The more interesting one is preventing it from going off the screen.
   It will need to know something about the grid... 
   perhaps you should add a parameter to the constructor that creates
   a class variable that references the grid?
   */
    if (this.row < 9) {
    this.row++;
    }
  }
  
  
  moveRight() {
    /* only do this if the row is the max number of columns int grid.
    The more interesting one is preventing it from going off the screen.
   It will need to know something about the grid... 
   perhaps you should add a parameter to the constructor that creates
   a class variable that references the grid?
   */
  if (this.col < 9) {
    this.col++;
      }
  }

  
  
  
  moveLeft() {
    /* only do this if the row is the max number of columns int grid.
    The more interesting one is preventing it from going off the screen.
   It will need to know something about the grid... 
   perhaps you should add a parameter to the constructor that creates
   a class variable that references the grid?
   */
  if (this.col > 0) {
    this.col--;
      }
  }
}
