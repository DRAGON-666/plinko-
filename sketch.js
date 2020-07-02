const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisionHeight=300;

var particles=[];
var division=[];
var plinko=[];


function setup(){
    var canvas = createCanvas(480,800);

    engine = Engine.create();

    world = engine.world;

    ground = new Ground(200,15,550,20);


    for (var d =0; d <=width; d = d+ 80){
        divisions.push(new division(d , height-divisionHeight/2,10,divisionHeight));
   
    }
}

function draw() {
    background("black");  

    Engine.update(engine);

    ground.display();

    divisionheight.display();   

    drawSprites();
}


