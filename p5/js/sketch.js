function preload()
{

}
function setup()
{
	loadJSON("http://api.conceptnet.io/c/en/example",gotData);
	createCanvas(200,200);
}
function gotData(data)
{
	console.log(data["edges"][0]["surfaceText"]);

}
function draw()
{
	ellipse(50,50,10,10);
}