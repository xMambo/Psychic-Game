

//Set up an array of leters

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var randomLetter = Math.floor(Math.random() * letters.length);
    var chosenLetter = letters[randomLetter];
    var lettersGuessed = [];
    var guessesLeft = 10;

function startGame() {

    var chosenLetter = letters[randomLetter];
    var lettersGuessed = [];
    var guessesLeft = 10;
    
    

console.log(chosenLetter);
}
//Choose a random letter
function userGuess() {
    

}

//Record key press
document.onkeypress = function (event) {
    var playerGuess = event.key;

    if (playerGuess === chosenLetter) {
        wins++;
        alert("You Win!");
        function empty() {
            lettersGuessed = [];
        }
        empty();
    }

    userGuess();
    if (playerGuess !== chosenLetter) {
        guessesLeft--;
        losses++;

    }

    if (guessesLeft == 0) {
        lettersGuessed = [];
        guessesLeft = 10;
    }

    if (lettersGuessed.indexOf(playerGuess) >= 0) {
        
    }
    else {
        lettersGuessed.push(playerGuess);
        document.getElementById("guesses").innerHTML = lettersGuessed;
        console.log(lettersGuessed);
    }


    
    
    
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("playerGuess").innerHTML = guessesLeft;
    
}

startGame();

