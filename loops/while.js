let i = 1;
while (i <= 10) {
	console.log(i);
	i = i + 1;
}

console.log("++++++++++++++++++++++++++++++++++++");

let usernames = [
	"yasin",
	"amirreza",
	"erfan",
	"selena",
	"sara",
];

let i = 0;
while (i < usernames.length) {
	console.log(`hello user : ${usernames[i]}`);
	i = i + 1;
}

console.log("++++++++++++++++++++++++++++++++++++");

let i = 0;

do {
	console.log(`hello user : ${usernames[i]}`);
	i = i + 1;
}
while (i < -1) 

console.log("++++++++++++++++++++++++++++++++++++");

let number = 0;

while (number < 100) {

	if (number % 2 == 0) {
		number = number + 1;
		continue;
	}

	console.log(`${number} is odd`);
	number = number + 1;
}

console.log("++++++++++++++++++++++++++++++++++++");


