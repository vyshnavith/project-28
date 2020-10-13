
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var Boy,Tree,stone;
var cons;
var slingshot;

function preload()
{

	backgroundImg = loadImage("bg.png");
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	Ground1 = new Ground(700,660,1400,20);
	stone = new Stone(200,400,30);

	mango1 = new Mango(990,290,40);
	mango2 = new Mango(1090,310,40);
	mango3 = new Mango(1090,170,40);
	mango4 = new Mango(1280,250,40);
	mango5 = new Mango(1170,220,40);


	Engine.run(engine);

	slingshot = new SlingShot(stone.body,{x:200,y:435});
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);






  Ground1.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
	
 textSize(20);
 fill("Black");
 text("Press Space To Retry",1000,50);

  
  
  
  drawSprites();
 
}



function mouseDragged(){
    Events.on(engine,"afterUpdate",function(){ 
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	})
	
	

    
   
}


function mouseReleased(){

    engine.events = {};
    slingshot.fly();
}



function detectCollision(S,M) {
	Spos = S.body.position;
	Mpos = M.body.position;

	var distance = dist(Spos.x,Spos.y,Mpos.x,Mpos.y);
	if(distance <= S.r+M.r) {
		Matter.Body.setStatic(M.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		
		Matter.Body.setPosition(stone.body, {x: 200 , y: 400});
		slingshot.attach(stone.body);
	}
	
  }
