var car,wall,thickness;
var speed,weight;


function setup() {

  createCanvas(1600,400);

  car=createSprite(50, 200, 50, 50);
  
  speed=random(223,321)
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);

  car.velocityX = speed;

}

function draw() {
  background("black");  
  drawSprites();
  
  if (hasCollided(car,wall)){
    car.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
   if (damage>10){
     wall.shapeColor=color(255,0,0);
   }

   if (damage<10){
     wall.shapeColor=color(0,255,0);
    }

  }

  var deformation=0.5*weight*speed*speed/22500;

  if (wall.x-car.x<wall.width/2+car.width/2 && deformation<100 ){
    car.velocityX=0;
    car.shapeColor="green"
  }

  if (wall.x-car.x<wall.width/2+car.width/2 && deformation<180 && deformation>100){
    car.velocityX=0;
    car.shapeColor="yellow"
  }
  
  if (wall.x-car.x<wall.width/2+car.width/2 && deformation>180){
    car.velocityX=0;
    car.shapeColor="red"
  }



}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;

  wallLeftEdge=wall.x;

  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }

  else {
    return false;
  }
}

