
var seaRoseLines;
function preload() {
  seaRoseLines = loadStrings('sea_rose.txt');
}
function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  background(50);
  textSize(16);
  for (var i = 0; i < seaRoseLines.length; i++) {
    fill(128+(i*10));
    text(seaRoseLines[i], 50, 50+i*20);
  }
}

/*
var stories;
function preload() {
  stories = loadStrings('sea_roses.txt');
}
function setup()
{
	//loadJSON("http://api.conceptnet.io/c/en/example",gotData);
	createCanvas(200,200);
	background(200);
	//loadStrings('FairyTales.txt', doText);
}

function doText(data) {
  for (var i=0; i<data.length; i++) {
    text(stories[i], 5, 20*i+20);
  }
}
function draw()
{
	ellipse(50,50,10,10);
}

*/
