const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld, ground, box1, box2;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  // create Ground 
  ground = new Ground (200,390,400,20);
  //create box
  box1 = new Box (200,300,50,50);
  box2 = new Box (240,100,50,50);
  
}

function draw() {
  background("blue"); 
  Engine.update (myEngine); 
  
  box1.display ();
  box2.display ();
  ground.display ();
}