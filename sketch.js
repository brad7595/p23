var helicopterIMG, helicopterSprite, packageSprite1,packageSprite2,packageSprite3;
var packageIMG1,packageIMG2,packageIMG3;
var packageBody1,packageBody2,packageBody3,ground;
var line1,line2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG1=loadImage("package.png")
	packageIMG2=loadImage("package 2.png")
	packageIMG3=loadImage("package 3.png")
 
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	

	packageSprite1=createSprite(width/2, 80, 10,10);
	packageSprite1.addImage(packageIMG1)
	packageSprite1.scale=0.2

	packageSprite2=createSprite(480, 80, 10,10);
	packageSprite2.addImage(packageIMG2)
	packageSprite2.scale=0.2

	packageSprite3=createSprite(330, 80, 10,10);
	packageSprite3.addImage(packageIMG3)
	packageSprite3.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	line1=createSprite(width/2,height-50,20,20);
	line1.shapeColor=color("red");
	line2=createSprite(510,610,20,20);
	line2.shapeColor=color("red");
    line3=createSprite(310,610,20,20);
	line3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;


	packageBody1 = Bodies.circle(width/2 , 200 , 10 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody1);

	packageBody2 = Bodies.circle(width/2 , 200 , 10 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody2);

	packageBody3 = Bodies.circle(width/2 , 200 , 15 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody3);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite1.x= packageBody1.position.x 
  packageSprite1.y= packageBody1.position.y 
 
  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 

  packageSprite3.x= packageBody3.position.x 
  packageSprite3.y= packageBody3.position.y 


  packageSprite1.collide(line1);
  packageSprite2.collide(line1);
  packageSprite3.collide(line1);

  packageSprite1.collide(line2);
  packageSprite2.collide(line2);
  packageSprite3.collide(line2);

  packageSprite1.collide(line3);
  packageSprite2.collide(line3);
  packageSprite3.collide(line3);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody1,false);
 }

 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody2,false);
 }

 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody3,false);
 } 
 
}



