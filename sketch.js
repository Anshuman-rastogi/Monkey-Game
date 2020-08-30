
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, survivalTime;

function preload(){
  //loading all images
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating the playground
  createCanvas(400,400);
  
  //creating all objects of the game & adding images
  ground=createSprite(400,350,800,10);
  ground.velocityX=-4;
  
  monkey=createSprite(100,340,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.09;
  
  //survival time
  suvivalTime=0;
  
  //creating groups for food and obstacles
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  //underline the text with black colour
  stroke("black");
  //changing the text size in pixels
  textSize(20);
  //changing the text colour
  fill("black");
  
}

function draw() {
  //changing the background colour
  background(220);
  
  //survival time calculating 
  survivalTime=Math.ceil(frameCount/frameRate());
  //display text
  text("Survival Time:"+ survivalTime,100,50);
  
  //reset the ground's position and making it infinite scrolling
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //jump monkey when the space key is pressed
  if(keyDown("space")) {
   monkey.velocityY=-10; 
  }
  
  // adding gravity
  monkey.velocityY=monkey.velocityY+0.6;
  
  //colliding the monkey with the ground
  monkey.collide(ground);
  
  //calling the functions for food and obstacles
  spawnFood();
  spawnObstacles();
  
  //display the objects on the screen
  drawSprites();
  
}

//creating food
function spawnFood() {
 if(frameCount%80===0) {
    banana=createSprite(400,100,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.lifetime=80;
    banana.scale=0.1; 
   
    FoodGroup.add(banana);
 } 
}

//creating obstacles
function spawnObstacles() {
 if(frameCount%300===0) { 
   obstacle=createSprite(400,330,20,20); 
   obstacle.addImage(obstacleImage); 
   obstacle.velocityX=-5;
   obstacle.scale=0.15;
   obstacle.lifetime=80;
   
   obstacleGroup.add(obstacle);
 } 
}