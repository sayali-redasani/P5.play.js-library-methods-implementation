var sakil  , tuhin, c;

function setup() {
  createCanvas(1200,800);
  tuhin = createSprite(600, 400, 50, 80);
  tuhin.shapeColor = "green";
  tuhin.debug = true;
  sakil = createSprite(400,200,80,30);
  sakil.shapeColor = "green";
  sakil.debug = true;

  c =  createSprite(100, 100, 20, 40);
  c.shapeColor =  "blue";


}

function draw() {
  background(0,0,0);  
  sakil.x = World.mouseX;
  sakil.y = World.mouseY;

  if(isTouching(sakil, c)){
    sakil.shapeColor = "red";
    c.shapeColor = "red";
  }
  else{
    sakil.shapeColor = "green";
    c.shapeColor = "green";
  }
 
  drawSprites();
}

