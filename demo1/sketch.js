var stories;
function preload() {
  stories = loadStrings('data/FairyTales.txt');
}



function setup() {
  loadJSON("http://api.conceptnet.io/c/en/cinderella",getData);
  createCanvas(600, 600);
   var words = RiTa.tokenize(stories[0])
    for (var i=0, j = words.length; i<j; i++) {
        text(words[i], 50, 50 + i*20);
    }
 
}
function getData(data)
{
 text(data["@context"][0],400,400);
}


function draw() {
  /*
 background(50);
  textSize(16);
  for (var i = 0; i < stories.length; i++) {
    fill(128+(i*10));
    text(stories[i], 50, 50+i*20);
  }
  */
  
}