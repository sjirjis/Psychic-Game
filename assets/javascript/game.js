
var game = {
	wins: 0,
	losses: 0,
	userGuess: null,
	guessAllowed: 15,
	guessCount: null,
	guessesLeft: 15,
	answer: null,
	answerBank: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

	setAnswer: function(){
		this.answer = this.answerBank[Math.floor(Math.random() * (this.answerBank.length + 1))];
	},

	gameReset: function(){
		this.guessesLeft === 15;
		this.guessCount === 0;
		document.getElementById("guessesLeft").innerHTML = '<h4>Guesses Left: ' +  game.guessesLeft + '</h4>';
		// this.userGuess === null;
		document.getElementById("guessSoFar").innerHTML = "<h4>Your guesses so far: </h4>";
	},

	gameStartValues: function(){
		document.getElementById("wins").innerHTML = "<h4>Wins: " + game.wins + "</h4>";
		document.getElementById("losses").innerHTML = "<h4>Losses: " + game.losses + "</h4>";
		document.getElementById("guessesLeft").innerHTML = '<h4>Guesses Left: ' +  game.guessesLeft + '</h4>';
		document.getElementById("guessSoFar").innerHTML = "<h4>Your guesses so far: </h4>";
	}
};
	
game.gameStartValues();
game.setAnswer();

document.onkeyup = function(event){
	game.userGuess = event.key;

	if(game.userGuess == game.answer) {
		game.wins = game.wins + 1;
		document.getElementById("wins").innerHTML = "<h4>Wins: " + game.wins + "</h4>";
		//game.gameReset()
		game.guessesLeft = 15;
		game.guessCount= 0;
		document.getElementById("guessesLeft").innerHTML = '<h4>Guesses Left: ' +  game.guessesLeft + '</h4>';
		document.getElementById("guessSoFar").innerHTML = '<h4>Your guesses so far: </h4>';				
		game.setAnswer();
		console.log(game.answer);
	} 
	else {
		game.guessCount = game.guessCount + 1;
		game.guessesLeft = game.guessAllowed - game.guessCount;
		document.getElementById("guessesLeft").innerHTML = '<h4>Guesses Left: ' +  game.guessesLeft + '</h4>';
		document.getElementById("guessSoFar").innerHTML = document.getElementById("guessSoFar").innerHTML + game.userGuess + ", ";

		if(game.guessCount === game.guessAllowed){
			game.losses = game.losses + 1;
			document.getElementById("losses").innerHTML = "<h4>Losses: " + game.losses + "</h4>";
			// game.gameReset();
			// console.log(game.guessesLeft);
				game.guessesLeft = 15;
				game.guessCount= 0;
				document.getElementById("guessesLeft").innerHTML = '<h4>Guesses Left: ' +  game.guessesLeft + '</h4>';
				document.getElementById("guessSoFar").innerHTML = '<h4>Your guesses so far: </h4>';				
				game.setAnswer();
				console.log(game.answer);
		}
		
	}
}

// window.onload = function(){
// 	document.getElementById("wins").innerHTML = game.wins;
// }



console.log(game.answer);

