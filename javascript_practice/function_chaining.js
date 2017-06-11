var obj = function(){
	var i = 0;

	var add = function(j){
		i += j;
		return this;
	};

	var subtract = function(j){
		i -= j;
		return this;
	};

	var print = function(){
		console.log(i);
	};

	return { add:add, subtract: subtract, print: print };
};

var x = obj();


//x.add(3);
//x.subtract(2);
//x.print();

//console.log(x.add(3));
// x.add(3).subtract(2).print();
console.log(x);