function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  player=createSprite(100,500,30,30)

  Endpoint=createSprite(530,30,30,30)
 

 Object2=createSprite(500,200,100,30)
  
  Object1=createSprite(100,300,100,30)

  Object1.velocityX =-10

  Object2.velocityX =10


  edge=createEdgeSprites()
 
 
}

function draw() {
  background("blue"); 
  Object1.bounceOff(edge[0])
  Object1.bounceOff(edge[1])


  Object2.bounceOff(edge[0])
  Object2.bounceOff(edge[1])


  if(keyDown('up')){
    player.y-=6
  }

  if(keyDown('down')){
    player.y+=6
  }

  if(keyDown('left')){
    player.x-=6
  }

  if(keyDown('right')){
    player.x+=6
  }

  if(player.isTouching(Endpoint)){
    text("You Won",200,200,)
  }
  
  if(player.isTouching(Object1)){
    text("You Lose",200,200)
    Object1.velocityX=0
  }
  
  if(player.isTouching(Object2)){
    text("You Lose",200,200)
    Object2.velocityX=0
  }















drawSprites()
  
}
