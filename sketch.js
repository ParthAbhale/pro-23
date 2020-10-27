const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var package,ground,helicopter;
var box1,box2,box3;

function setup() {
	createCanvas(800, 700);
	
	package = new Package(400,350,10,10);
  helicopter = new Helicopter(width/2,300);
  ground = new Ground(0,690,width,10);
  box1 = new Box(width/2,680,100,10);
  box2 = new Box(width/2-40,680,10,100);
  box3 = new Box(width/2+40,680,10,100);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)


  
  package.display();
  helicopter.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
     Matter.Body.setStatic(packageBody,false)


  }
}



