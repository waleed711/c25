const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, Cannon,backgroundimage, Cannonball



function preload(){
backgroundimage = loadImage("assets/background.gif")
}


function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
 tower = new Tower(150,350,160,310)
 ground = new Ground(0,590,1200,10)
 angle = -PI/4
 Cannon = new cannon(180,110,100,50,angle) 
Cannonball = new cannonball(Cannon.x,Cannon.y)
 console.log(tower)
  
}

function draw() {
  background(189);
  image(backgroundimage,0,0,1200,600)
  Engine.update(engine);
 Cannon.display()
 tower.display()
 ground.display()
  Cannonball.display()

  
  
  
  
 
}







