//Variable declaration
let can = [];
let cant = [];
let backgroundImg;
let song;
let bubble = [];


//Avatar and world model creation
let worldModel = {
 "fightPeople": ["greg heffley", "mike wazowski", "horse toddler",  "babies without knives", "babies with knives",  "my biological dad", "geese", "swans", "other angry birds"],
 }

let avatar = {}; // new  JSON Object
avatar.id = 0;
avatar.name = "Viyan Poonamallee";
avatar.winFights = ["greg heffley", "mike wazowski", "horse toddler", "babies without knives"];
avatar.loseFights = ["babies with knives",  "my biological dad", "geese", "swans", "other angry birds"]; 

let goose = {};
goose.id = 0;
goose.name = "goose";
goose.species = "Branta Canadensis";




class Bubble {
 constructor(x, y, r, img) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.can = img;
 }
  
move() {
  this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);
}
  
show() {
image(this.can, this.x, this.y, this.r, this.r);
  
  // stroke(0);
// strokeWeight(4);
//  noFill();
//  ellipse(bubble.x, bubble.y, 24, 24);
}
  
}

//Actual canvas starts here

function preload() {
  song = loadSound("assets/Superman.mp3");
  backgroundImg = loadImage("assets/me.jpg")
  for (let i = 0; i < 4; i++) {
    can[i] = loadImage("assets/can" + i + ".jpg");
  }

  for (let i = 0; i < 5; i++) {
    cant[i] = loadImage("assets/cant" + i + ".jpg");
  }
}

function setup() {
  createCanvas(500, 500);
  song.play();


//Text parameters  
  strokeWeight(4);
  stroke(51);
  fill(255, 255, 255);
}

function draw() {
    textSize(35);
    background(backgroundImg, 0, 10);
  fill(128 + sin(frameCount*0.1) * 128)
    text("I'm Viyan", 150, 150);
    text("Type for people I can beat up", 20, 200);
    text("Click for people I cant beat up", 20, 250);

    if (keyIsPressed) {
      textSize(20);
      background(255);
      for (b of bubble) {
        b.show();
        b.move();
        text("People I can beat in a fight", 150, 150);
      }
    }
    if (mouseIsPressed) {
      textSize(20);
      background(255);
            for (b of bubble) {
        b.show();
        b.move();
      }
      text("People I cant beat in a fight", 150, 150);
    }
  
}

function keyPressed() {
  clear();
   for (i = 0; i < 10; i++) {
  let x = random(width);
  let y = random(height);
  let r = random(100, 150);
  let yes = random(can);
  bubble[i] = new Bubble(x, y, r, yes);
  }
  
 
}


function mousePressed() {
    clear();
   for (i = 0; i < 10; i++) {
  let x = random(width);
  let y = random(height);
  let r = random(100, 150);
  let yes = random(cant);
  bubble[i] = new Bubble(x, y, r, yes);
  }
  

  

}



// saves the following to a file called "lion.json":
// {
//   "id": 0,
//   "species": "Panthera leo",
//   "name": "Lion"
// }
