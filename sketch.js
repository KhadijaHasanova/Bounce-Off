var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityY = 5;

  movingRect = createSprite(400,800,50,100)
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -5;
}

function draw() {
  background(0);  

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.x < fixedRect.x < fixedRect.width/2 + movingRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
  
  if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    &&movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }

  drawSprites();
}