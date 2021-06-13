const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3,paper;
function preload()
{
 	
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(600,400,1200,10);
	 dustbin1 = new Dustbin(880,360,20,70);
	 dustbin2 = new Dustbin(940,385,100,20);
	 dustbin3 = new Dustbin(980,360,20,70);
	 paper = new Paper(100,375,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:80});
	}
}



