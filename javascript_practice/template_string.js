// let str = 'hello\n' + 'world';
// // let str = "hello";
// let str = `hello 


// world`;
"use strict";

let x = `Bond`;

let bondline = `My name is ${x}, James ${x}.`;

console.log(bondline);


let one = 1;
let two = 2;

let sum = `adding ${one} and ${two} gives me ${one + two}`;
console.log(sum);

let tagged = function(strArray, vals){
	console.log(strArray);
	console.log(vals);
};

tagged`adding ${one} and ${two} give me ${one + two}`