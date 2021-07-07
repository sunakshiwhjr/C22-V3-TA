const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let myEngine;
let myWorld;

var ball;
var thread;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  
  myWorld = myEngine.world;

  var ball_options = {

    restitution: 0.9
  }

  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(myWorld, ball);

  thread = Matter.Constraint.create({

    pointA: {x: 200, y:20},
    bodyB: ball,
    length: 200,
    stiffness: 0.1
  })

  World.add(myWorld, thread);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(myEngine);

  ellipse(ball.position.x, ball.position.y, 20);

  push();
  stroke("White");
  strokeWeight(2);
  line(thread.pointA.x, thread.pointA.y, thread.bodyB.position.x, thread.bodyB.position.y);

  //or 
  // line(thread.pointA.x, thread.pointA.y, ball.position.x, ball.position.y);
  pop();
}

function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: -0.05, y:0})
  }

  if(keyCode === RIGHT_ARROW)
  {
    Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.05, y:0})
  }
}


