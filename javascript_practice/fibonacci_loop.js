var looping = function(n) {
	var a = 0,
		b = 1,
		f = 1;

	for (var i=2;i<=n;i++) {
		f = a+b;
		a=b;
		b=f;
		console.log(f);
	}
};

looping(40);