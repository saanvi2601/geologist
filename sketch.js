
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies 
	ground = new Ground(700,height,1400,40);
	hammer = new Hammer(100,100);
	stone = new Stone(700,300,70,70);
	iron = new Iron (300,300,80,50);
	rubber = new Rubber(400,400,30);
	sand1 = new Sand(500,300,10);
	sand2 = new Sand(540,300,10);
	sand3 = new Sand(460,300,10)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  ground.display();
  hammer.display();
  stone.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
 
}



