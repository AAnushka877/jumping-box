var canvas;
var music;
var box; 
var l1,l2,l3,l4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,650);
   

   l1 = createSprite(10,600,230,20);
   l1.shapeColor = "orange";
   
   box = createSprite(230,70,20,20);
   box.shapeColor = "white";
   box.velocityY = 5;

   l2 = createSprite(215,600,150,20);
   l2.shapeColor = "blue";

   l3 = createSprite(380,600,150,20);
   l3.shapeColor = "purple";

   l4 = createSprite(540,600,150,20);
   l4.shapeColor = "green";
}

function draw() {
    background("yellow");

    if(isTouching(box , l2)){
        box.shapeColor="blue";
        l2.shapeColor = "blue"
      }
      else{
        box.shapeColor = "white";
        l2.shapeColor = "blue"

    if(l2.isTouching(box) && box.bounceOff(l2));

    if(l1.isTouching(box) && box.bounceOff(l1));

    if(l3.isTouching(box) && box.bounceOff(l3));

    if(l4.isTouching(box) && box.bounceOff(l4));

    
    createEdgeSprites();
box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    drawSprites();
}
function isTouching(box,l2){
    if(box.x - l2.x < box.width/2 + l2.width/2 &&
      l2.x - box.x < box.width/2 + l2.width/2 &&
      box.y - l2.y < box.height/2 + l2.height/2  &&
      l2.y - box.y < box.height/2 + l2.height/2 ) {
     
   }