
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundSprite;
var engine, world; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	cPaper = new Paper (150, 645, 55);
	dustBin = new DustBin (600,660);
	Engine.run(engine);
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  
   cPaper.display();
   drawSprites();
   dustBin.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(cPaper.body, cPaper.body.position,{x:300, y:-600});
	}
}



