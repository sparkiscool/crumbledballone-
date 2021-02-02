
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine)

	//Create the Bodies Here.
	bin1 = new bin(700,620,100,10)
	binL = new bin(650,610,10,50)
	binR = new bin(750,610,10,50)
	paper1 = new paper(100,300,10)
	ground1 = new Ground(400,630,800,10)




	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin1.display()
  binL.display()
  binR.display()
  paper1.display()
  ground1.display()
  
 
}
function keyPressed(){
	if( keyCode=== UP_ARROW){
		console.log("just the consle message")
		Matter.Body.applyForce(paper1.body,paper1.body.position,{
			x:5,
			y:-5
		})
	
}}
