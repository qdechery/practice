window.onload = function() {
	var button = documentgetElementById('button');
	button.onclick = function() {
		addBanana();
	};
}


var numBananas = 0;

function addBanana() {
	numBananas++;
	this.innerHTML = 'Add a banana (' + numBananas + ')';
}
