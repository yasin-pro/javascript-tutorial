let name = "Yasin";
var age = 20;

{ // {} this is scope
	
	let name = "Amir"; // shadow variable!
	var age = 22;

	console.log("The value of the name variable inside the scope : ", name);
	console.log("The value of the age variable inside the scope : ", age);
}

console.log("The value of the name variable in the main scope : ", name);
console.log("The value of the age variable in the main scope : ", age);