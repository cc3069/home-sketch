
function setup() {
    createCanvas(windowWidth, windowHeight);

let x = 10
let y = 10
let width = 70
let height = 60
let radius = 20
let side = 320
let number = 4
let number2 = 2.6
let write = "LakeVille Lions"
field(x,y,width,height)
playarea1(x,y,side)
playarea2(x,y,side)

function field(x,y,width,height){
fill('hsl(160, 100%, 50%)');
strokeWeight(4);
rect(x,y, width+1270, height+390);
//storage
stroke("white");
strokeWeight(2.6);
rectMode(CENTER);
fill ("rgb(178,34,34)")
rect(x+640, y+113, width+500, height+40);
//roof
fill("brown");
strokeWeight(2.6);
stroke("white")
rect(x+640, y+30, width+430, height);
//knob
fill("white");
rect(x+640, y+128, width+80, height+10);
fill("black");
noStroke();
circle(x+640, y+128, radius);
// left tree1
strokeWeight(4);
stroke("black");		
fill("brown");
rect(x+185, y+190, width-50, height+40);
strokeWeight(4);
stroke("black");	
strokeWeight(4);
stroke("black");	
fill ('hsb(160, 100%, 50%)');	
 ellipse(x+195, y+165, width, height+10);
// left tree2
strokeWeight(4);
stroke("black");	
 fill("brown");
 rect(x+285, y+140, width-50, height+40);
strokeWeight(4);
stroke("black");	
fill ('hsb(160, 100%, 50%)')
 ellipse(x+295, y+105, width, height+50);
//right tree1
strokeWeight(4);
stroke("black");
fill("brown");
rect(x+1105, y+190, width-50, height+40);
strokeWeight(4);
stroke("black");	
fill ('hsb(160, 100%, 50%)');
ellipse(x+1105, y+125, width, height+50);
//right tree2
strokeWeight(4);
stroke("black");
fill("brown");
rect(x+1015, y+120, width-50, height+40);
strokeWeight(4);
stroke("black");
fill ('hsb(160, 100%, 50%)');
ellipse(x+1015, y+90, width, height+10);
//White Balls
strokeWeight(4);
stroke("black");
fill("white");
circle(x+240, y+360, radius);
circle(x+840, y+340, radius);
circle(x+240, y+290, radius);	
circle(x+840, y+400, radius);	
//cone
strokeWeight(4);
stroke("black");
fill("orange");	
rect(x+370, y+290, width-20, height+40);
rect(x+740, y+270, width-20, height+40);
ellipse(x+370,y+350, width+25, height+15);
ellipse(x+740, y+340, width+25, height+15)
}
	
function playarea1(x,y,side){
fill("grey");
strokeWeight(4);
stroke("blue");
square(x+1190,y+545, side)
stroke("black");
fill("purple")
ellipse(x+1188, y+550, width+153, height+130);
stroke("white");
fill("blue")
ellipse(x+1188, y+550, width+80, height+40);
textSize(16);
text(write, x+1140, y+550);
}

function playarea2(x,y,side){
fill("grey");
strokeWeight(4);
stroke("blue");
square(x+160, y+545, side)
stroke("black");
fill("purple")
ellipse(x+140,y+550, width+153, height+140);
stroke("white");
fill("blue")
ellipse(x+140, y+550, width+83, height+40);
textSize(16);
text(write,x+93, y+550);
    }
}

