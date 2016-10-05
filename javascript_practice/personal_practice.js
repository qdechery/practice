// function create_array_from_sentence(stringToSplit, separator) {
// 	var array_words = stringToSplit.split(separator);
	
// 	console.log('The input sentence is "' + stringToSplit + '"');
// 	console.log('We split the original sentence with this separator: "' + separator + '"');
// 	console.log('The array has ' + array_words.length + ' elements ' + array_words.join(' + '));
// }

// var input = 'This is the example sentence',
// 	space = ' ',
// 	comma


// create_array_from_sentence(input, space);


function split_that_string(input) {
	var input2 = input.split(' '),
		rejointString = input2.join('+');
	console.log(rejointString)
};

split_that_string("This is the fake sentence");



// var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

// console.log(names);

// var re = /\s*;\s*/;
// var nameList = names.split(re);

// console.log(nameList);