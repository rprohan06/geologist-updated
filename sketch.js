const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(200,200,20)
    stone = new Stone(400,100,170,PI/2)
    iron = new Iron(600,100,200,PI/2)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    
    hammer.display();
    rubber.display();
    stone.display();
    iron.display(); 
}