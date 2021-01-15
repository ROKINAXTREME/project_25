var rect1, rect2
function setup() {
  createCanvas(1200,800);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="red"
  rect2=createSprite(400, 200, 80, 30);
  rect2.shapeColor="red"
}

function draw() {
  background(0,0,0); 
  if(bounce_off(rect1, rect2)){
    rect1.velocityX=-50
    rect2.velocityX=50
  }
  drawSprites();
}
