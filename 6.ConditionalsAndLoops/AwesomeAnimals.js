/*
#1: Awesome Animals
Write a forloop that modifies an 
array of animals, making them 
awesome! For example, if your 
starting array is . . .
var animals = ["Cat", "Fish", 
"Lemur", "Komodo Dragon"];
then after you run your loop, it 
should look like this:
["Awesome Cat", "Awesome Fish", "Awesome Lemur", "Awesome 
Komodo Dragon"]
Hint: You’ll need to reassign values to the array at each 
index. This just means assigning a new value at an existing 
position in the array. For example, to make the first animal 
awesome, you could say:
animals[0] = "Awesome " + animals[0];
*/
var animals = ["Cat", "Fish","Lemur", "Komodo Dragon"];

for (var i = 0; i <animals.length; i++){
	animals[i] = "Awesome " + animals[i];
	
};
	
console.log(animals);