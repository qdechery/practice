var num_list = [5, 2, 6, 5, 87, 54, 436, 7, 5, 34, 2, 3, 5, 6, 7, 7, 7, 7, 7];


function more_odd_or_even(num_list) {
	var evens = [],
		odds = [];
		// number = num_list[i];

	for (i=0; i<num_list.length; i++) {		
		if(num_list[i] % 2 == 0) {
			evens.push(num_list[i]);
			// console.log(num_list[i]);
		} 
		else {
			// console.log(num_list[i]);
			odds.push(num_list[i]);
		}

	}
	console.log(odds)
	if (evens.length > odds.length) {
		console.log("There are more EVENS in this list.");
	}
	else if (odds.length > evens.length) {
		console.log("There are more ODDS in this list.");
	}
	else {
		console.log("There are exactly the same amount of odds and evens.");
	}
}

more_odd_or_even(num_list);