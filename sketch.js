var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var boy,boyI,boyI2;
  var hole,holeI,holeG;
  var lid,lidG
  var bg1,bg1I,bg2,bg2I;
  
function preload()
{
  boyI = loadImage("kid1.png");
  boyI2 = loadImage("kid2.png");
  holeI = loadImage("hole.png");
  lidI = loadImage("lid.png");
  bg1I = loadImage("bg1.png");
  bg2I = loadImage("bg2.png");
}
function setup()
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  bg1 = createSprite(400,400);
  bg1.addImage(bg1I);
  bg1.scale = 2

  bg2 = createSprite(1200,400);
  bg2.addImage(bg2I);
  bg2.scale = 2;

  boy = createSprite(100,725)
  boy.addImage(boyI);
  boy.scale = 0.5

  holeG = createGroup();
}
function draw() 
{
  background("black");

  bg1.velocityX = -2;
  bg2.velocityX = -2;

if(bg1.x===-400)
{
  bg1.x = 1200;
}
if(bg2.x===-400)
{
  bg2.x = 1200;
} 
if(World.frameCount%100==0)
{
  hole = createSprite(800,770);
  hole.addImage(holeI)
  hole.velocityX = -2;
  hole.setCollider("rectangle",0,0,50,10);
  hole.lifetime = 200;
  holeG.add(hole);
}

if(keyWentDown("space"))
{
  lid = createSprite(400,200);
  lid.addImage(lidI);
  lid.velocityY = 5;
  lid.setCollider("rectangle",0,0,50,10);
}
if(boy.isTouching(holeG))
{
  boy.addImage("kid2");
}

drawSprites();
}


  
 

 

