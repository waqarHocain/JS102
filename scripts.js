/*
	This is my solution
	Object Exercise
	Course Name: From Fundamentals to Functional JS (frontendmasters.com)
*/
//Use this file to implement Part One of your project

// Adding properties to the object
 var animal = {};
 animal.username = "maano";
 console.log(animal.username);
 animal["tagline"] = "Maano Billi";

var noises = ["meow", "purr"];

animal.noises = noises;

// Looping
for(var key in animal) {
	if(key === "username") {
		console.log("Hi, my name is " + animal[key]);
	} else if(key === "tagline") {
		console.log("I like to say " + animal[key]);
	}
}

// Review

// What are the different ways you can add properties and values to objects?
// Ans: Two, dot and bracket notation. 

// Which of these methods would you use if you wanted to add a property to an object that had a weird symbol (think '&')
// Ans: Bracket Notation (with commas).

// What about if the property is a variable, how does that change the syntax?
// Ans: For variables, use bracket notation, as expression in bracket is first evaluated then its value is used.


