/*
#2: Are These Arrays the Same?
Write a function called areArraysSame that takes two arrays 
of numbers as arguments. It should return true if the two 
arrays are the same (that is, they have the same numbers 
in the same order) and false if they’re different. Try running 
the following code to make sure your functions are working 
correctly:
areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
false
Hint 1: you’ll need to use a for loop to go through each of 
the values in the first array to see whether they’re the same 
in the second array. You can return falsein the forloop if 
you find a value that’s not equal.
Hint 2: you can leave the function early and skip the for
loop altogether if the arrays are different lengths.
*/

function areArraysSame(first, second){
	same = true;
	if (first.length != second.length){
		return false;
	}
	for (var i = 0; i < first.length; i++) {
		if (first[i] != second[i]) {
			return false;
		};
	};
	return true;
}