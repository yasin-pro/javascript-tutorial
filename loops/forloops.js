let usernames = [
	"yasin",
	"amirreza",
	"erfan",
	"selena",
	"sara",
];

console.log("++++++++++++++++++++++++++++++++++++");


for (let i = 0; i < usernames.length; i++) {
	console.log(`hello user : ${usernames[i]}`);
}


for (let i = usernames.length - 1; i > 0; i--) {
	console.log(`hello user reverse : ${usernames[i]}`);
}


for (x in usernames) {
	console.log(x, usernames[x]);
}

console.log("++++++++++++++++++++++++++++++++++++");


usernames.forEach((item, index)=>{
	console.log(item, index)
});

console.log("++++++++++++++++++++++++++++++++++++");

for (x in usernames) {
	if (usernames[x] == "selena") {
		console.log(`selena is in ${x}`);
		break;
	}
	console.log(x);
}

console.log("++++++++++++++++++++++++++++++++++++");


usernames.forEach((item, index)=>{
	if (item == "selena") {
		console.log("use break in for each function is illigal");
	}
});

console.log("++++++++++++++++++++++++++++++++++++");
