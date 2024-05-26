var myAnonymousVariable; // camel case

let mySecondAnonymousVariable;

console.log(myAnonymousVariable);

console.log(mySecondAnonymousVariable);

let name = "amir";

var age = 20;

{
	
	let name = "yasin"; // shadow variables
	
	var age = 22;
		
	console.log(name);

	console.log(age);

}


console.log(name);

console.log(age);




