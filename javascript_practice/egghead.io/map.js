var symbols = getStockSymbols([
	{ symbol: 'XFX', price: 240.22, volume: 23432 },
	{ symbol: 'TNZ', price: 332.19, volume: 234 },
	{ symbol: 'JXJ', price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));

// Because this function is called the same thing as symbols
// it has access to the array within itself
// which means if we call the map function on stocks
// btw: Stocks = a made up word to represent each object w/in symbols
// it will go through each stocks - which we represent with another arbitrary 
// title, appropriately named, "stock", but it could be anything, even 'X'.
// and ultimately return only the symbol attribute of each 'stock'.
// you could also choose to return stock.price or stock.volume instead.

function getStockSymbols(stocks) {
	return stocks.map(function(stock) {
		return stock.symbol;
	});
}

/* // Does same as above!
Array.prototype.map = function(projection) {
	var results = [];

	this.forEach(function(item) {
		results.push(projection(item));
	});

	return results;
};
*/
