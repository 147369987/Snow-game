const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,gr, GRIMG;
var boy,boyImg;
var Snow5=50;
var snowFall=[];


function preload(){
  bg=loadImage("snow1.jpg");
  GRIMG=loadImage("gr.PNG");
  boyImg=loadAnimation("kw1.png","kw2.png")
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  


gr=createSprite(650,670);
gr.addImage(GRIMG);
gr.scale=3.2;
gr.velocityX=-10;

boy=createSprite(150,480);
boy.addAnimation("walking",boyImg)
boy.scale=0.6;
boy.velocityX=1;
boy.setCollider("rectangle",15, -20,100,180) 

if(frameCount % 275 === 0){
  for(var i=0; i<Snow5; i++){
  snowFall.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  boy.collide(gr);

  if(gr.x < 530){
    gr.x=600;
  }

  if(boy.x > 1200){
    boy.x=150;
  }

  

//add gravity


  for(var i = 0;i < Snow5; i++){
    snowFall[i].display();
    snowFall[i].changePosition();
    }    
    


gr.display();

  
  drawSprites();

}