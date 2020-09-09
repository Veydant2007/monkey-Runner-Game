var bananaImage,obstacleImage,obstacleGroup,backGround,score,backGroundImage,monkey_running,bananaGroup,invisibleGround

function preload(){
  
  backGroundImage = loadImage("jungle.jpg")
 monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")

  
}

function setup() {
  createCanvas(400, 400);
  backGround = createSprite (200,200,10,10);
  backGround.addImage("movingBackground",backGroundImage)
  backGround.velocityX = -4
  
  monkey = createSprite (50,350,20,20);
  monkey.addAnimation("monkeyInMovement",monkey_running);
  monkey.scale = 0.12
 
  
  invisibleGround = createSprite (200,380,400,10)
  invisibleGround.visible = false
  
   obstacleGroup = createGroup();
  
  
  bananaGroup = createGroup();
  
score = 0
}
  


function draw() {
  background(220);
  if (backGround.x <= 0  ){
  backGround.x = backGround.width/2  
  }
  
  if (bananaGroup.isTouching(monkey)){
  score = score+2
    bananaGroup.destroyEach();
    
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
  
   monkey.collide(invisibleGround);
  
  stroke("white");
  textSize(20);
  fill("white");
  text (score,300,100);  
  
   if (monkey.y  > 161){
     if(keyDown("space")) {
    monkey.velocityY = -10;
       
    }
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  obstacles();
  food();
  
}


function food (){
  if(World.frameCount%80 === 0){
    banana = createSprite(400,9,10,10);
    banana.y = random(120,200);
    banana.addImage("Banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 105;
    bananaGroup.add(banana);
    
  }
}

function obstacles (){
  if (World.frameCount%300===0){
    rocks = createSprite(400,365,10,40);
    rocks.velocityX = -4
    rocks.scale = 0.2
    rocks.addImage("Stone",obstacleImage);
    rocks.lifetime = 105;
    obstacleGroup.add(rocks);
  }
}
  