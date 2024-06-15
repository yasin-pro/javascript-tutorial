
let answer = sayHello(1); // not error


// declar function
function sayHello (number, name = "user") {
	console.log(`hello ${name}`);
	return `hello ${name}!`;
}

let msg = `this is message from server ${answer}`;

console.log(msg);
