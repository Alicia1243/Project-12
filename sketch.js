var garden,rabbit;
var gardenImg,rabbitImg;
var apples;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup()
{
  
createCanvas(400,400);
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);
rabbit.x = mouseX;
}


function draw() 
{
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples()
{
  apples = createSprite(Random, 75, 5, 4.5);
  apples.velocityY = 10;
  apples.lifetime;
  if(frameCount % 80 == 0)
  {
  apples.MathsRound(Random, 80);
  apples.addImage(applesImg);
  }
}

function createLeaves()
{
  Leaves = createSprite(Random, 75 , 6, 4);
  leaves.velocityY = 10;
  leaves.lifetime;
  if(frameCount % 80 == 0)
  {
  leaves.MathsRound(Random, 80);
  }
  
  leaves.addImage(leavesImg);
}