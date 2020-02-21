class Currency {
  // This is the constructor
  constructor(col, row, type, worth, inflationRate, amount) {
    this.col = col;
    this.row = row;
    this.type = type;
    this.worth = worth;
    this.inflationRate = inflationRate;
    this.amount = amount;
  }
  
  addMoney(num) {
    this.amount = this.amount + num;
    print(this.amount);
  }

  spendMoney(num) {
    this.amount = this.amount - num;
    print(this.amount);
  }
  
  drawInfo(a) {
    fill(0);
    a = new Agent(5, 5);

        text("Agent is interacting with object", 50, 50);
    
/*    text("Current column is " + this.col, 50, 50);
    text("Current row is " + this.row, 50, 50 * 2);
    text("Type/Name is " + this.type, 50, 50 * 3);
    text("Worth is " + this.worth, 50, 50 * 4);
    text("Inflation Rate is " + this.inflationRate, 50, 50 * 5);
    text("Amount in object is " + this.amount, 50, 50 * 6); */
  }
  
  
  inflate() {
    this.worth = this.worth * (1 + this.inflationRate);
    print(this.worth);
  }

  upInflation() {
    this.inflationRate = this.inflationRate + random(0.001, 0.04);
    print(this.inflationRate)
  }       
} // end class
