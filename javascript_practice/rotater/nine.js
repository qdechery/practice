(function(x, y){
	let original = -(x+y),
		min = Math.min(x, y),
		text = "",
		combo = xy;

	for (i=0; i<min.length; i++){
		let factor = combo-original,
			first_num_str = factor.toString(),
			split_nums = first_num_str.split(''),
			first_num = split_nums[0],
			sec_num = split_nums[1];

		console.log(factor);
		let x = first_num,
			x = sec_num;
		
	}
	

})(6, 18);