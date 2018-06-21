//Initialize variables
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var guessesLeft = 13; //Initialize the amount of guesses
document.getElementById("guessesLeft").innerHTML = guessesLeft; //Display guessesLeft
var wins = 0; //Initialize the amount of wins
document.getElementById("wins").innerHTML = wins; //Display wins
var guesses;

//Generate initial word
var answers = ["john", "paul", "george", "ringo"];
var index = Math.floor(Math.random() * answers.length); //Generate random index
var answer = answers[index]; //Select answer
console.log("Current answer: " + answer); //Log it for debugging purposes
document.getElementById("answer").innerHTML = answer; //Display it for easier debugging purposes
//Initialize Display Word (The one with the blanks)
var word = [];
for (var i = 0; i < answer.length; i++) {
    word.push("_");
}
document.getElementById("word").innerHTML = word.join(" ");

document.onkeyup = function (event) {
    var input = event.key; //Get input
    console.log("guess: " + input);
    //Make sure the player guesses a letter and not 'Tab', etc.
    if (alphabet.includes(input)) {
        //If they guess correctly
        if (answer.includes(input)) {
            //Replace the spaces with the letter
            document.getElementById("word").innerHTML = changeWord(input, word, answer);
        }
        //If they guess incorrectly
        else {
            //If this is their last guess
            if (guessesLeft === 1) {
                //Restart the game
                //Choose new answer
                var index = Math.floor(Math.random() * answers.length); //Generate random index
                var answer = answers[index];
                console.log("Current answer: " + answer); //Log it for debugging purposes
                document.getElementById("answer").innerHTML = answer; //Display it for easier debugging purposes
                //Initialize Display Word (The one with the blanks)

            }
            //If this isn't their last guess
            else {
                //One less Guess
                guessesLeft = guessesLeft - 1;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;

                //Update guesses
                guesses.push(input);
                document.getElementById("guesses").innerHTML = guesses;
            }
        }
    }
};




/**
 * 
 * @param {string} a The User's guess (a letter)
 * @param {array} b The word they're currently guessing
 * @param {string} c The word we're comparing to
 */
function changeWord(a, b, c) {
    for(var i=0; i<b.length; i++) {
        if (c.charAt(i) === a) {
            b[i] = a;
        }
    }
    console.log("after changeWord: " + b);
    return b;
;}