// function wants an array of stocks and then a minimum price specified


//	Feed in an array of stocks and a variable parameter for the filter
//	The variable parameter could also be hard coded in by removing the
//	parameter from the dependencies list, removing it from the expensiveStocks 
//	var below, and hardcoding something in where >= minPriceis  
function getStocksOver(stocks, minPrice) {
	return stocks.filter(function(stock) {
		return stock.price >= minPrice;
	});


	// ******SAME AS ABOVE!*****
	// var results = [];

	// stocks.forEach(function(stock) {
	// 	if (stock.price >= minPrice) {
	// 		results.push(stock);
	// 	}
	// });

	// return results;
}

//***** LITERAL REPRESENTATION OF FILTER FUNCTION*******
// Array.prototype.filter = function(predicate) {
// 	var results = [];

// 	this.forEach(function(item) {
// 		if (predicate(item)) {
// 			results.push(item);
// 		}
// 	});

// 	return results;
// };


var expensiveStocks = getStocksOver(
	[
		{ symbol: 'XFX', price: 240.22, volume: 23432 },
		{ symbol: 'TNZ', price: 332.19, volume: 234 },
		{ symbol: 'JXJ', price: 120.22, volume: 5323 },
	],
	150.00);

console.log(JSON.stringify(expensiveStocks));