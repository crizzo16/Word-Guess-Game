// Initialize Constants
var alphabet = "abcedfghijklmnopqrstuvwxyz";
var answers = ["across the universe", "act naturally", "all i've got to do", "all my loving", "all together now", "all you need is love", "and i love her", "and your bird can sing", "anna (go to him)", "another girl", "any time at all", "ask me why", "baby it's you", "baby's in black", "baby, you're a rich man", "back in the u.s.s.r.", "the ballad of john and yoko", "because", "being for the benefit of mr. kite", "birthday", "blackbird", "blue jay way", "boys", "can't buy me love", "carry that weight", "chains", "come together", "cry baby cry", "a day in the life", "day tripper", "dear prudence", "devil in her heart", "dig a pony", "dig it", "dizzy miss lizzy", "do you want to know a secret", "doctor robert", "don't bother me", "don't pass me by", "drive my car", "eight days a week", "eleanor rigby", "the end", "every little thing", "everybody's got something to hide except for me and my monkey", "everybody's trying to be my baby", "fixing a hole", "flying", "the fool on the hill", "for no one", "for you blue", "from me to you", "get back", "getting better", "girl", "glass onion", "golden slumbers", "good day sunshine", "good morning good morning", "good night", "got to get you into my life", "a hard day's night", "hello, goodbye", "help!", "helter skelter", "her majesty", "here comes the sun", "here, there and everywhere", "hey bulldog", "hey jude", "hold me tight", "honey pie", "i am the walrus", "i don't want to spoil the party", "i feel fine", "i me mine", "i need you", "i saw her standing there", "i should have known better", "i wanna be your man", "i want to hold your hand", "i want to tell you", "i will", "i'll be back", "i'll cry instead", "i'll follow the sun", "i'm a loser", "i'm happy just to dance with you", "i'm looking through you", "i'm only sleeping", "i'm so tired", "i've got a feeling", "i've just seen a face", "if i fell", "if i needed someone", "in my life", "it won't be long", "it's all too much", "it's only love", "julia", "lady madonna", "let it be", "little child", "the long and winding road", "long, long, long", "love me do", "love you to", "lovely rita", "lucy in the sky with diamonds", "magical mystery tour", "martha my dear", "mean mr mustard", "michelle", "misery", "money (that's what i want)", "mother nature's son", "mr moonlight", "the night before", "no reply", "norwegian wood", "not a second time", "nowhere man", "ob-la-di, ob-la-da", "octopus's garden", "oh! darling", "one after 909", "only a northern song", "p.s. i love you", "paperback writer", "penny lane", "please mister postman", "please please me", "polythene pam", "revolution 1", "revolution 9", "rock and roll music", "rocky racoon", "roll over beethoven", "savoy truffle", "sgt. pepper's lonely hearts club band", "she came in through the bathroom window", "she loves you", "she said she said", "she's leaving home", "something", "strawberry fields forever", "a taste of honey", "taxman", "tell me what you see", "tell me why", "there's a place", "things we said today", "think for yourself", "ticket to ride", "till there was you", "tomorrow never knows", "twist and shout", "two of us", "wait", "we can work it out", "what goes on", "what you're doing", "when i'm sixty four", "while my guitar gently weeps", "why don't we do it in the road", "wild honey pie", "with a little help from my friends", "within you without you", "the word", "words of love", "yellow submarine", "yesterday", "you like me too much", "you never give me your money", "you really got a hold on me", "you won't see me", "you're going to lose that girl", "you've got to hide your love away"];

var game = {
    "wins": 0,
    "maxGuesses": 13,
    "guessesLeft": "maxGuesses",
    "guesses": [],
    "notDone": true,
    "answer": answers[Math.floor(Math.random() * answers.length)],
    "word": createWord("answer"),
    "winsSpan": document.getElementById("wins"),
    "guessesLeftSpan": document.getElementById("guessesLeft"),
    "guessesSpan": document.getElementById("guesses"),
    "wordSpan": document.getElementById("word"),
};

document.onkeyup = function (event) {
    var input = event.key;

    // Reset Game
    if (event.keycode === 32) {
        resetGame();
    }

    // Guessing a letter
    if (alphabet.includes(input)) {
        //If the user guessed correctly
        if (game.answer.includes(input) && game.notDone) {
            game.word = replaceSpaces(input, game.answer, game.word);

            winScenario();
            
        }
        //If the user guessed incorrectly
        else if (game.notDone) {

        }
    }
};

function correctGuess() {
    // If the word is complete
    if (answer === word.join("")) {
        console.log("WIN");
        // Increment wins
        wins++;
        winsSpan.innerHTML = wins;

        // Replace letter
        displayString(word, wordSpan);

        // Don't let the user keep playing
        notDone = false;

        // Reset is done by pressing the space bar
    }
};

/**
 * This function create the array tha tis used to store the users correct guesses
 * @param {string} x The answer
 */
function createWord(x) {
    var word = [];
    for (var i = 0; i < x.length; i++) {
        // if the index is a letter
        if (alphabet.includes(x.charAt(i))) {
            word.push("_");
        }
        // if the index is a non-letter character
        else {
            word.push(x.charAt(i));
        }
    }
    return word;
};

/**
 * This function will look for the letter the user guessed and replace the appropriate blank spaces with that letter
 * @param {string} x The letter the user guessed.
 * @param {string} y The answer
 * @param {array} z All of the correct guesses
 */
function replaceSpaces(x, y, z) {
    for (var i = 0; i < y.length; i++) {
        if (y.charAt(i) === x) {
            z[i] = x;
        }
    }
    return z;
};

/**
 * Updates the game screen
 */
function updateScreen() {
    game.winsSpan.innerHTML = game.wins;
    game.guessesLeftSpan.innerHTML = game.guessesLeft;
    game.guessesSpan.innerHTML = game.guesses;
    displayString(game.word, game.wordSpan);
};

/**
 * Resets all the functions of the game
 */
function resetGame() {
    game.guessesLeft = game.maxGuesses;
    game.guesses = [];
    game.notDone = true;

    game.answer = answers[Math.floor(Math.random() * answers.length)];

    game.word = createWord(game.answer);
};

/**
 * This function will display the word with spaces and appripriate non-letter characters
 * @param {array} x The array containing the user's guesses
 * @param {reference} y The reference to the correct span on the document
 */
function displayString(x, screen) {
    var temp = "";
    for (var i = 0; i < x.length; i++) {
        // If the word contains a space
        if (x[i] === " ") {
            temp += " &nbsp; ";
        }
        // Only put spaces where there aren't other characters
        else if (x[i] === "_" || alphabet.includes(x[i])) {
            // Only put space before if previous character is an underscore
            if ((i - 1 >= 0) && (x[i - 1] === "_" || alphabet.includes(x[i - 1]))) {
                temp += " ";
            }
            // Add underscore to the display word
            temp += x[i];
            // Only put space after if next character is an underscore
            if ((i + 1 < x.length) && (x[i + 1] === "_" || alphabet.includes(x[i + 1]))) {
                temp += " ";
            }

        }
        //Otherwise, just add the character
        else {
            temp += x[i];
        }
    }
    screen.innerHTML = temp;
};