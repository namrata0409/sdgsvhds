var fixedobject, movingobject;

function setup() {
  createCanvas(800,800);
  fixedobject = createSprite(400, 200, 70, 50);
  fixedobject.shapeColor= "green";
  movingobject = createSprite(200, 200, 40, 50);
  movingobject.shapeColor= "green";
}

function draw() {
  background(0); 
  movingobject.x= mouseX;
  movingobject.y= mouseY;
  console.log(movingobject.x - fixedobject.x)

  if(movingobject.x - fixedobject.x <= movingobject.width/2 + fixedobject.width/2 && 
    fixedobject.x - movingobject.x <= movingobject.width/2 + fixedobject.width/2 )
    {
      fixedobject.shapeColor= "red"; 
      movingobject.shapeColor= "red";
    }
    else{
      fixedobject.shapeColor= "green"; 
      movingobject.shapeColor= "green";
    }
  drawSprites();
}


