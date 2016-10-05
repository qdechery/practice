function squareNumber(x) {
	var squared = x*x;
	
	console.log("The reslt of squaring the number ",x," is ",squared+".");
};

function halfNumber(x){
	var half = x/2;
	console.log("Half of",x,"is",half);

}

function percentOf(x,y){
	var xPercent = x/100,
		result = xPercent*y;
	console.log(xPercent+" is",y+"%","of",result+".");

}

squareNumber(55);
halfNumber(200);
percentOf(50,50);