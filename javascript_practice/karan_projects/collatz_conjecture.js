function even_or_odd(n) {
	if(n%2 === 0){
		console.log("n is even: " + n);
	} else if (n%2 != 0) {
		console.log("n is odd: " + n);
	}
}

console.log(even_or_odd(101));