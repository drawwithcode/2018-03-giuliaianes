var myColors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A'];
//var

var nColors = myColors.length;



var cardWidth = 20;
var cardHeight = 20;
var cardScale = 1.5;
var offset=cardWidth*2;

var card1StartX = 0;
var card1StartY = 0;

var negativeY=50;
var y=-negativeY;



var numCarte = 25;


//frameRate(40);

function preload(){
}

function setup() {
  createCanvas(800,600);
  background(234, 224, 204);
  //background(0, 0, 0);
}

function draw() {

var x=0;

//y=(frameCount-negativeY)%height;

y= random()*height;

console.log('y='+y);
//generate 50 shapes (columns) each loop
  for (var i=-25; i<= numCarte; i++) {
    //var y=frameCount-negativeY;
    x+=noise(frameCount/50)*height;

    //if(i%2==0) {stroke(255);}
    //else {stroke(0,0,0);}
    noStroke();
    //fill(random(255), random(255), random(255));
    //fill(lerpColor(color('#F6CEF5'),color('#29088A'), frameCount/120));
    var colIndex;
    if(i<0){
      colIndex=(i*(-1))%nColors;
    } else {
      colIndex=i%nColors;
    }
    fill(myColors[colIndex]);

    if(i%2==0){
      rect(x+(offset*i), y, cardWidth*cardScale, cardHeight*cardScale);
  } else {
    ellipse(x+(offset*i), y, cardWidth*cardScale, cardHeight*cardScale);
  }


  }

}
