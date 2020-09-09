var bullet, wall; 
var bulletimg, wallimg, redwall, greenwall;
var speed, weight, thickness; 

function preload(){
  bulletimg = loadImage("bullet.jpg");
  wallimg = loadImage("wooden.jpg");
  greenwall = loadImage("greenwall.jpg");
  redwall = loadImage("redwall.jpg");
}

function setup() {

  createCanvas(1350,400);

  thickness =random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50,50);
  bullet.shapeColor="white";
  bullet.addImage(bulletimg);
  bullet.scale=0.35;
  bullet.velocityX=speed;

  wall=createSprite(1300, 200, 10,10);
  wall.shapeColor="grey";
  wall.addAnimation("wood",wallimg);
  wall.addAnimation("green",greenwall);
  wall.addAnimation("red",redwall);
  wall.depth=bullet.depth-1;

}

function draw() {
  background("black");

  if(collided(bullet,wall)){
    
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage<=10){
      wall.changeAnimation("green",greenwall);
      fill("green");
      textSize(20);
      text("Acceted   :    Damage:"+damage ,500,200);
    }

    if(damage>10){
      wall.changeAnimation("red",redwall);
      fill("red");
      textSize(20);
      text("Rejected   :    Damage:"+damage ,500,200);
    }
    

  }

  drawSprites();
}

function collided(first,second){

  firstRightedge=first.x+first.width/2;
  secondLeftEdge=second.x-second.width/2;
  if(firstRightedge >= secondLeftEdge){
    return true;
  }else{
    return false;
  }

}