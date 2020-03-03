function draw() {
    createCanvas(windowWidth, windowHeight);
let x = 10
let y = 10
let width = 70
let height = 60
let radius = 20
let side = 320
let number = 4
let number2 = 2.6
field(x,y,width,height)
playarea1(x,y,side)
playarea2(x,y,side)

function field(x,y,width,height){
background("black");
strokeWeight(4);
fill(0, 0, frameCount % 255);
rect(2 * frameCount/90, 300, 50, 50);
rect(2 * frameCount/90, 550, 50, 50);
rect(2 * frameCount/90, 650, 50, 50);
fill("white")
 let e = 340 + 100 * cos(frameCount / 100);
 let f =100 + 100 * sin(frameCount / 100);
   ellipse (e, f, 50, 50);
let g = 260 + 100 * cos(frameCount / 100);
 let i = 380 + 100 * sin(frameCount / 100);
     ellipse (g, i, 50, 50);
let z = 1018 + 100 * cos(frameCount / 100);
let w = 100 + 100 * sin(frameCount / 100);
         ellipse (z, w, 50, 50);
let k = 860 + 100 * cos(frameCount / 100);
let s = 380 + 100 * sin(frameCount / 100);
         ellipse (k, s, 50, 50);
//storage
rectMode(CENTER);
fill(0, 0, frameCount % 255);
rect(x+640, 23 + 100 * sin(frameCount / 100), width+500, height+40);
rect(x+640, 40 * sin(frameCount / 100), width+430, height);
//knob
fill("black");
rect(x+640,y+128, width+80, height+10);
fill("white");
noStroke();
circle(x+640, y+128, radius);
circle( x+640, y + 628, radius)

	
//White Balls
strokeWeight(4);
stroke("black");
fill(0, 0, frameCount % 255);
circle(650, 238, 20)
circle(650, 338, 20)
circle(650, 438, 20)
circle(650, 738, 20)
}

	
function playarea1(x,y,side){
fill(0, 0, frameCount % 255);
let h = 1198 + 100 * cos(frameCount / 100);
let w = 560 + 100 * sin(frameCount / 100);
    ellipse(h, w, 153, 100);
}

function playarea2(x,y,side){
fill(0, 0, frameCount % 255);
let a = 150 + 100 * cos(frameCount / 100);
let b = 560 + 100 * sin(frameCount / 100);
   ellipse(a, b, 153, 100);
}
}
