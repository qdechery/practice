function getStockSymbols(stocks) {
	var symbols = [];

	stocks.forEach(function(stock) {
		symbols.push(stock.symbol);
	})
	/* // equivalent as above!	
	for(counter = 0; counter < stocks.length; counter++) {
		stock = stocks[counter];
		symbols.push(stock.symbol);
	}
	*/
	return symbols;
}

var symbols = getStockSymbols([
	{ symbol: 'XFX', price: 240.22, volume: 23432 },
	{ symbol: 'TNZ', price: 332.19, volume: 234 },
	{ symbol: 'JXJ', price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));