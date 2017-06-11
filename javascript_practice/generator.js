"use strict";

// let i = [1,2,3,4];

// let iterator = i[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


//can also do function* generator(){}
function *generator() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
};

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); 