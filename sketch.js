
const Engine= Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var engine, world, canvas;

var backgroundImg, birdImg, bird, ground;

var wood, wood1, wood2, wood3, wood4, wood5, wood6, wood7, wood8;

var pig, pigImg;
var block, blockImg;


function preload() {
birdImg = loadImage("red.png");
backgroundImg = loadImage("back.png");	
blockImg = loadImage("wood.png");
pigImg = loadImage("pig.png");
}

function setup() {
createCanvas(1200,600)

engine= Engine.create()
world = engine.world

var static_options={
	isStatic: true
}





var wood_options = {
	isStatic: false
}



wood = Bodies.rectangle(700,500, 20, 190, wood_options)
World.add(world, wood)
wood2 = Bodies.rectangle(900,500, 20, 190, wood_options)
World.add(world, wood2)
wood3 = Bodies.rectangle(790,200, 250, 10, wood_options)
World.add(world, wood3)
wood4 = Bodies.rectangle(800,100, 10, 190, wood_options)
World.add(world, wood4)
wood6 = Bodies.rectangle(750,100, 10, 190, wood_options)
World.add(world, wood6)



ground = Bodies.rectangle(500, height+7, 1200, 20, static_options)
World.add(world, ground)
stroke(10)


block = Bodies.rectangle(200,580, 150,120, static_options)
World.add(world, block)


var bird_options= {
	isStatic: false,
	restitution: 0.1,
	density:1.2
}

bird= Bodies.rectangle(150, 40, 50, 50, bird_options)
World.add(world, bird)


fill("maroon")
rectMode(CENTER)
ellipseMode(RADIUS)
}


function draw() {
background(0)

image(backgroundImg, 0, 0, 1200,600)

Engine.update(engine)

rect(ground.position.x, ground.position.y, 1200, 20)

rect(wood.position.x, wood.position.y, 10, 190)
rect(wood2.position.x, wood2.position.y, 10, 190)
rect(wood3.position.x, wood3.position.y, 250, 10)
rect(wood4.position.x, wood4.position.y, 10, 190)
rect(wood6.position.x, wood6.position.y, 10, 190)


push()
imageMode(CENTER)
image(blockImg, block.position.x, block.position.y, 150, 150)
pop()

push()
imageMode(RADIUS)
image(birdImg, bird.position.x, bird.position.y, 80,80)
pop()


keyPressed()




textSize(30)
text("Press Right Arrow", 500,100)
}






function keyPressed() {
if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(bird,{x:0, y:0}, {x:0, y:-5.1})
		Matter.Body.applyForce(bird, {x:0, y:0}, {x:2.3, y:2})
	} 
}
