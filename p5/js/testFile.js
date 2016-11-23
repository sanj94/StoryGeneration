//EXAMPLE ON MIODULES

var movies = require('./moduleTest')
movies.printAvatar()
/*
//EXAMPLE ON ASYNCHRONOUS CALLBACK


//EXAMPLE ON PROTOTYPES
function user()
{
	this.name = "",
	this.life = 100,
	this.giveLife = function giveLife(targetPlayer)
	{
		targetPlayer.life +=1;
		this.life -=1;
		console.log(this.name+" gives life to "+targetPlayer.name);
	};
	
}

var Bucky = new user();
var Wendy = new user();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky's life "+Bucky.life);
console.log("Wendy's life "+Wendy.life);
*/