window.onload = function() {
	var text = "";
	for (var i=1; i < 101; i++) {
		text += i + '<br/>';
		
		if (i%3 == 0) {
			text = 'fizz <br/>';
			document.getElementById("main").innerHTML = text;
		} else {
			document.getElementById("main").innerHTML = text;
		}

	}

}

// fizz_buzz();