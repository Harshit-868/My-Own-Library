var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(500, 400, 80, 30);
  rect2 = createSprite(400, 400, 80, 30);

  rect1.velocityX = -3;
  rect2.velocityX = 2;

  movingRect.velocityX = +5;
  fixedRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect, fixedRect);
  bounceOff(rect1, rect2);
  drawSprites();
}