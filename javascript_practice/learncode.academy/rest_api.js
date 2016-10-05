$.ajax({
	type: 'POST',
	url: 'http://rest.learncode.academy/api/qentin/practice',
	dat: {name: 'Billy Bob', age: 27},
	success: function(data) {
		console.log('friend added!', data); //the new item is required with an ID
	}
})