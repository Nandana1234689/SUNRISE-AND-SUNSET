const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    bg = loadImage ("sunrise1.png")
    getBackgroundImg()
}

function setup(){
 createCanvas(950,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(255)
    imageMode(CENTER); 
    image (bg,400,350,950,700)
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){



        
            var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
            var responseJSON = await response.json();
        
            var datetime = responseJSON.datetime;
            var hour = datetime.slice(11,13);
            
            if(hour>=04 && hour<=06){
                bg = loadImage("sunrise1.png")
              
            }
            else if (hour>=06 && hour<=08) {
                bg =loadImage( "sunrise2.png")
          
            } 
            else if (hour>=08 && hour<=10) {
                bg =loadImage( "sunrise3.png")
            
            }
            else if (hour>=10 && hour<=12) {
                bg =loadImage( "sunrise4.png")
              
            }
            else if (hour>=12 && hour<=14) {
                bg =loadImage( "sunrise5.png")

            }
            else if (hour>=14 && hour<=16) {
                bg =loadImage( "sunrise6.png")

            } else if (hour>=16 && hour<=18) {
                bg =loadImage( "sunset7.png")

            } else if (hour>=18 && hour<=20) {
                bg =loadImage( "sunrise8.png")

            } else if (hour>=20 && hour<=22) {
                bg =loadImage( "sunrise9.png")

            } else if (hour>=22 && hour<=0) {
                bg =loadImage( "sunrise10.png")

            } else if (hour>=0 && hour<=02) {
                bg =loadImage( "sunrise11.png")

            }else{
                bg =loadImage( "sunrise12.png")
            }
        
          //  backgroundImg = loadImage(bg);
           
        
}
