/*
#3: h4ck3r sp34k 
Turn text into h4ck3r sp34k! A lot of people on the Internet 
like to replace certain letters with numbers that look like 
those letters. Some numbers that look like letters are 4for 
A, 3for E, 1for I, and 0for O. Even though the numbers look 
more like capital letters, we’ll be replacing the lowercase 
versions of those letters. To change normal text to h4ck3r 
sp34k, we’ll need an input string and a new empty string:
varinput = "javascript is awesome";
varoutput = "";
You’ll then need to use a forloop to go through all the 
letters of the input string. If the letter is "a", add a "4"to the 
output string. If it’s "e", add a "3". If it’s "i", add a "1", and 
if it’s "o", add a "0". Otherwise, just add the original letter 
to the new string. As before, you can use +=to add each new 
letter to the output string.
After the loop, log the output string to the console. If it 
works correctly, you should see it log "j4v4scr1pt 1s 4w3s0m3".
*/

var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
	if (input[i] == "a"){
		output += "4";
	} else if (input[i] == "e"){
		output += "3";
	} else if (input[i] == "i"){
		output += "1";
	} else if (input[i] == "o"){
		output += "0";
	} else {
		output += input[i];
	}
};

console.log(output);
