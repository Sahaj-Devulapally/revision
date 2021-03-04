const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage

function preload(){

 bgImage=loadImage("images/bg.jpg")
}


function setup(){
createCanvas(800,400)
engine=Engine.create()
world=engine.world

ground=new Ground(400,380,800,5)
couch1=new Train(80,80,50,50)
couch2=new Train(140,80,50,50)
couch3=new Train(200,80,50,50)
couch4=new Train(260,80,50,50)
couch5=new Train(320,80,50,50)
couch6=new Train(380,80,50,50)

line1=new SlingShot(couch1.body,couch2.body)
line2=new SlingShot(couch2.body,couch3.body)
line3=new SlingShot(couch3.body,couch4.body)
line4=new SlingShot(couch4.body,couch5.body)
line5=new SlingShot(couch5.body,couch6.body)
rock1= new Rock(700,200,100,100);


}

function draw(){
background(bgImage)
Engine.update(engine)

ground.show()
line1.display()
line2.display()
line3.display()
line4.display()
line5.display()
couch1.display()
couch2.display()
couch3.display()
couch4.display()
couch5.display()
couch6.display()
rock1.show()
var collision = Matter.SAT.collides(couch6.body,rock1.body);
if(collision.collided)
{
  textSize(30);
  stroke(3);
  fill('blue');
  text("CRASH",500,200);
  
  
}
      
  }

 

function keyPressed()
{
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(couch6.body,{x:couch6.body.position.x,y:couch6.body.position.y},
      {x:0.5,y:0});
      
  }


}