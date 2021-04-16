const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var bottle1,bottle2,bottle3,bottle4,bottle5;
var bottle6,bottle7,bottle8;
var ball;
var grounding;
var left;
var bottom;
var topBorder;
var left;
var stand;
var launcher;
var gameState = "onStand";
function preload(){
    grounding = loadImage("images/background.jpg");
}

function setup() {
 createCanvas(windowWidth-50,windowHeight-200);

engine = Engine.create();
world = engine.world;

bottom = new Border(width/2-10,height-100,width-300,20);
left = new Border(width/12,height/2,20,height-180);
topBorder = new Border(width/2-10,100,width-300,20);

bottle1 = new Bottle(300,200);
bottle2 = new Bottle(300,300);
bottle3 = new Bottle(300,400);
bottle4 = new Bottle(300,500);
bottle5 = new Bottle(400,200);
bottle6 = new Bottle(400,300);
bottle7 = new Bottle(400,400);
bottle8 = new Bottle(400,500);
stand = new Border(width-180,height/2+50,80,10);


ball = new Ball(width-180,height/2);

launcher = new Launcher(ball.body,{x:width-180,y:height/2});

}

function draw() {
 background(0); 

Engine.update(engine);
imageMode(CENTER);
image(grounding,width/2,height/2,width-300,height-180);
bottom.display();
topBorder.display();
left.display();
bottle1.display();
bottle2.display();
bottle3.display();
bottle4.display();
bottle5.display();
bottle6.display();
bottle7.display();
bottle8.display();
ball.display();
bottom.display();


 drawSprites();

}

function mouseDragged(){
	if(gameState !== "launched"){
		Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
		Matter.Body.applyForce(ball.body,{x:-45,y:-40})
	}
}
function mouseReleased(){
	launcher.fly();
	gameState = "launched";
}
function keyPressed(){
	
}