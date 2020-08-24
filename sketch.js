
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

dustbin1 = new dustbin(40,60,20,20);
ground1 = new ground (780,680,400,10);



	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin1.display ();
  ground1.display ();
  
  drawSprites();
 
}



