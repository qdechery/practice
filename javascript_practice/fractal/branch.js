function Branch(begin, end) {
	this.begin = begin;
	this.end = end;
	this.finished = false;

	this.jitter = function(){
		this.end.x += random(-1,1)
		this.end.y += random(-1,1)
	}


	this.show = function() {
		stroke(255);
		// strokeWeight(5);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}
 
	this.branchA = function() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI/6);
		dir.mult(0.75);
		var newEnd = p5.Vector.add(this.end, dir);
		var b = new Branch(this.end, newEnd);
		return b;
	} 
	this.branchB = function() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-PI/6);
		dir.mult(0.75);
		var newEnd = p5.Vector.add(this.end, dir);
		var b = new Branch(this.end, newEnd);
		return b;
	}
}