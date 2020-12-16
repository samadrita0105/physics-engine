var movingRect,fixedRect;
var o1,o2,o3,o4;


function setup() {
  createCanvas(800,400);
fixedRect =  createSprite(200, 200, 50, 50);
fixedRect.shapeColor="green";
movingRect = createSprite(400,200,80,30);
movingRect.shapeColor="green";
o1 = createSprite(300,230,50,50);
o2 = createSprite(250,300,80,50);
o3 = createSprite(450,100,50,50);
o4 = createSprite(200,150,80,50);

}

function draw() {
background(255,255,255);  
movingRect.x=World.mouseX;
movingRect.y= World.mouseY;

if (isTouching (movingRect,o4))
{
movingRect.shapeColor="red";
o4.shapeColor="red";

}
else
{
movingRect.shapeColor="green";
o4.shapeColor="green";
}

  drawSprites();
}
