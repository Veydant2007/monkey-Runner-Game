var bananaImage,obstacleImage,obstacleGroup,backGround,score,backGroundImage,monkey_running,bananaGroup

function preload(){
  
  backGroundImage = loadImage ("jungle.jpg")
  monkey_running = loadAnimation ("Monkey_1.png","Monkey_2.png","Monkey_3.png","Monkey_4.png","Monkey_5.png","Monkey_6.png","Monkey_7.png","Monkey_8.png","Monkey_9.png","Monkey_10.png")
  
  bananaImage = loadImage ("banana.png")
  obstacleImage = loadImage ("stone.png")

  
}

function setup() {
  createCanvas(400, 400);
  backGround = createSprite (200,200,10,10);
  backGround.addImage("movingBackground",backGroundImage)
  background.velocityX = -4
  
  monkey = createSprite (50,350,20,20);
  monkey.addAnimation("monkeyInMovement",monkey_running);
  monkey.scale = 0.12
  
   obstacleGroup = createGroup();
  
  
  bananaGroup = createGroup();
  
score = 0
}
  


function draw() {
  background(220);
  if (backGround.x < 400){
  background.x = background.width/2  
  }
  
  if ( foodGroup.isTouching(monkey)){
  score = score+2
    food.destroy();
  }
  switch(score){
    case 10: monkey.scale = 0.12 
             break;  
    case 20: monkey.scale = 0.14
             break;
    case 30: monkey.scale = 0.16
             break;
    case 40: monkey.scale = 0.18
             break;
    default: break;
  }
  if ( obstacleGroup.isTouching(monkey)){
      monkey.scale = 0.10
      }
  drawSprites();
  
  stroke(white);
  textSize(20);
  fill(white);
  text (score,300,100);  
  
  obstacles();
  food();
  
}


function food (){
  if(World.frameCount%80 === 0){
    var banana = createSprite(400,9,10,10);
    banana.y = randomNumber(120,200);
    banana.addImage("Banana",bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 105;
    bananaGroup.add(banana);
    
  }
}

function obstacles (){
  if (World.frameCount%300===0){
    rocks = createSprite(400,335,10,40);
    rocks.velocityX = -4
    rocks.addImage("Stone",obstacleImage);
    rocks.lifetime = 105;
    obstacleGroup.add(rocks);
  }
  }