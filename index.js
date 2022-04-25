// Morse Code Encoding and Decoding using Objects (key-value pairs)

const morseCode = require('./morse-code'); // import a local module the file 'morse-code.js'
// morse-code exports 2 functions that we can use however we see fit

morseCodePhrase = morseCode.phraseToMorseCode("the quick brown fox");
console.log({morseCodePhrase});

backToEnglish = morseCode.morseCodeToPhrase(morseCodePhrase);
console.log({backToEnglish});

// what is your name in morse code?

// can you convert the morse code representation of your name back into the english representation of your name?
