/*
#2: Random String Generator
Make a random string generator. You’ll need to start with a 
string containing all the letters in the alphabet:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
To pick a random letter from this string, you can 
update the code we used for the random insult generator in 
Chapter 3: Math.floor(Math.random() * alphabet.length). This 
will create a random index into the string. You can then use 
square brackets to get the character at that index.
*/
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomWord = "";

for (var i = 0; i < 7; i++) {
	randomWord += alphabet[Math.round(Math.random() * alphabet.length)];
};
console.log(randomWord);
