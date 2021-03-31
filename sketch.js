var garden,rabbit,apple,redLeaf,orangeLeaf;
var gardenImg,rabbitImg,appleImg,redLeafImage,orangeLeafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("carrot.png");
  redLeafImg = loadImage("redLeaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function createApples(){
  
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
}
function createRedLeaf(){
  
  redLeaf=createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale=0.07;
  redLeaf.velocityY=3;
}

function createOrangeLeaf(){
  
  orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale=0.07;
  orangeLeaf.velocityY=3;
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX;
  if(frameCount%70==0){
    createApples();
  }
   if(frameCount%90==0){
    createRedLeaf();
  }
   if(frameCount%80==0){
    createOrangeLeaf();
  }
  drawSprites();
}