const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;
var ball, ball2, ball3, stick;
var bg;

function preload() {
 bg = loadImage("PoolGame.png")
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0;
  ball = new Ball (200, 200)
  ball2 = new Ball(300, 200)
  ball3 = new Ball(400, 430)
  
  //console.log(ball)
}

function draw() {
  background(bg);
  stick = new Stick (mouseX, mouseY)

  Engine.update(engine);
  ball.display()
  ball2.display()
  ball3.display()
  stick.display()
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:mouseX, y:mouseY})
  }
}