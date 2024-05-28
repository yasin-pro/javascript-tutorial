
let access = false;

let accessAge = 18

let userAge = 13;

// ----------------------------------------------------------------------

console.log(userAge == accessAge);
console.log(userAge > accessAge);
console.log(userAge >= accessAge);
console.log(userAge < accessAge);
console.log(userAge <= accessAge);

// ----------------------------------------------------------------------

// ? ternary 
access = (userAge >= accessAge) ? true : false;

let msg;

msg = (access) ? "welcome!" : "not allowed!"

console.log(msg);

// ----------------------------------------------------------------------

// what is stric (===) ?

console.log(20 == 20);

console.log(20 == "20");

console.log("20" == "20");

// ----------------------------------------------------------------------

// About Boolean

console.log(Boolean(1));

console.log(Boolean(150));

console.log(Boolean(-150));

console.log(Boolean(0.5));

console.log(Boolean(0));

console.log(Boolean(0.0));

console.log(`

	"yasin" -> "yasin".length -> 5 -> true

	" " -> " ".length -> 1 -> true

	"" -> "".length -> 0 -> false

	"0" -> "0".length -> 1 -> true

`);

