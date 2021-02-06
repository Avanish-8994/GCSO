var car,wall;
var speed, weight;
function setup() {
  createCanvas(1500,1500);
  wall= createSprite(900, 200, 25, 200);
  car= createSprite(200, 200, 80, 30);
  speed = random(55,90)
  weight = random(400,1500)
  deformation = createSprite(100,100,20,20);

}

function draw() {
  background(255,255,255); 

 car.velocityX=speed;



  console.log((0.5*weight*speed*speed)/22500)

if(car.x-wall.x<wall.width/2+car.width/2 
  && wall.x-car.x<wall.width/2+car.width/2
   && car.y-wall.y<wall.height/2+car.height/2 
   && wall.y-car.y<wall.height/2+car.height/2 )
  {car.shapeColor="brown";
  wall.shapeColor="maroon";
  

  
  
}
if (car.isTouching(wall)){
  car.velocity = 0;

}
else{car.shapeColor="red";
wall.shapeColor="green";

}
  drawSprites();
}
