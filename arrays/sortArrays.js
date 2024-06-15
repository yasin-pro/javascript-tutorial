

let usernames = ["yasin", "ali", "erfan", "amir"];

// console.log(usernames.sort().reverse());
// console.log(usernames.reverse());
// console.log(usernames.sort());


let numbers = [1, 20, 100, 3, 32, 64, 72, 7]

console.log(numbers.sort()); // -> string
// "1", "20", "100", "3", "32", "64", "72", "7"


console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
