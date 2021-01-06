
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxLeftSprite,boxBase,boxRightSprite,groundSprite,trash,img;

function preload(){
img=loadImage("paper.png");
img2=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

  trash = new Paper(200,350,70);

	//Create the Bodies Here.

	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition+20, boxY-30, 20,170);
 	boxleftSprite.shapeColor="red"

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY-30, 20,170 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+50, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightSprite=createSprite(boxPosition+180 , boxY-30, 20,170);
 	boxRightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+180 , boxY-30, 20,170 , {isStatic:true} );
	 World.add(world, boxRightBody);

	 boxBase=createSprite(boxPosition+100, boxY-73, 200,20);
	 boxBase.shapeColor=color(255,0,0);
	 boxBase.addImage(img2);
	 boxBase.scale = 0.75;
	 
	 groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  ellipseMode(CENTER);
  background(0);

 Engine.update(engine);

 trash.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trash.body,trash.body.position,{x:550,y:-900});
	}
}

