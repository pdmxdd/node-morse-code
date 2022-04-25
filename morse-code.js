// creating an object that has keys that are morse code symbols their values are letters
// this allows us to do something like this morseCodeToLetterObject["--."] -> which will give us: "g"
const morseCodeToLetterObject = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-.-.--": "!",
    "...---...": "sos",
};

// create a new object for our letterToMorseCodeObject convertor
const letterToMorseCodeObject = {};

// do a little magic so that we don't have to manually create this object, since all we are doing is reversing the keys and their respective values
const letterToMorseCodeArray = Object.entries(morseCodeToLetterObject).map((e) => e); // might as well be magic -- takes all the entries (key value pairs) and puts them in a multi dimensional array

// loop through array created above and actually reverse the key and value for each element in the array
for(let i = 0; i < letterToMorseCodeArray.length; i++) { 
    // for the given entries ["key", "value"] and swaps the keys with the values const tempArr = [entries[1], entries[2]] in our new letterToMorseCodeObject object
    letterToMorseCodeObject[letterToMorseCodeArray[i][1]] = letterToMorseCodeArray[i][0];
}

// create a function wrapping our dictionary for converting any morsecode symbol into it's letter
function morseCodeToLetter(morseCodeSymbol) {
    return morseCodeToLetterObject[morseCodeSymbol];
}

// create a function converting any morse code word into it's english word
function morseCodeToWord(morseCodeWord) {
    morseCodeSymbols = morseCodeWord.split(" ");
    word = "";
    for(let i = 0; i < morseCodeSymbols.length; i++) {
        word += morseCodeToLetter(morseCodeSymbols[i]);
    }
    return word;
}

// create a function converting any morse code phrase into it's english phrase
function morseCodeToPhrase(morseCodePhrase) {
    morseWords = morseCodePhrase.split("   ");
    phrase = "";
    for(let i = 0; i < morseWords.length; i++) {
        phrase += morseCodeToWord(morseWords[i]);
        phrase += " ";
    }
    return phrase.trim();
}

// create a function wrapping our letterToMorseCodeObject
function letterToMorseCode(englishLetter) {
    return letterToMorseCodeObject[englishLetter.toLowerCase()];
}

// function that converts an english word into its morse code representation
function wordToMorseCode(word) {
    return word.split("").map(e => letterToMorseCode(e)).join(" ");
}

// function that converts an english phrase into its morse code representation
function phraseToMorseCode(phrase) {
    words = phrase.split(" ");
    morsePhrase = "";
    for(const word of words) {
        morsePhrase += wordToMorseCode(word);
        morsePhrase += "   ";
    }
    return morsePhrase.trim();
}

// unit tests are spoilers... the following logs lead us closer to what unit tests will be doing for us checking our expectations

// make sure our objects match our expectations
// console.log(morseCodeToLetterObject); // keys should be morse code and their value should be their letter representation
// console.log(letterToMorseCodeObject); // keys should be letters and their value should be their morse code representation

// console.log(letterToMorseCode("a")); // expected -> .-
// console.log(wordToMorseCode("hello")); // expected -> .... . .-.. .-.. ---
// console.log(phraseToMorseCode("hello world")); // expected -> .... . .-.. .-.. ---   .-- --- .-. .-.. -..

// console.log(); // test line break

// console.log(morseCodeToLetter(".-")); // expected -> a
// console.log(morseCodeToWord(".... . .-.. .-.. ---")); // expected -> hello
// console.log(morseCodeToPhrase(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")); // expected hello world

// export the two functions our end user may actually use
module.exports = {
    morseCodeToPhrase: morseCodeToPhrase,
    phraseToMorseCode: phraseToMorseCode
}
