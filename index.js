const operations = {};

operations.add = function() {
	return this.numOne + this.numTwo;
}

operations.subtract = function() {
	return this.numOne - this.numTwo;
}

operations.divide = function() {
	return this.numOne / this.numTwo;
}

operations.multiply = function() {
	return this.numOne * this.numTwo;
}


operations.changeOp = function(type) {
	this.currentOp = type
	document.getElementById('current-op').innerHTML = this.currentOp
}

operations.changeNum = function(num) {
	!this.numOne ? this.numOne = parseInt(num) : this.numTwo = parseInt(num)
	this.displayNums()
	return console.log(this)
}

operations.displayNums = function() {
	document.getElementById('current-one').innerHTML = this.numOne;
	if (this.numTwo) {
		document.getElementById('current-two').innerHTML = this.numTwo;
		document.getElementById('equals').innerHTML = '='
		this.evaluate()
	}
}
// operations.clearNums = function() {
// 	this.
// }
operations.hasInput = function() {
	if (!this.numOne || !this.numTwo) {
		alert("Must provide two numbers")
		return true;
	}
}

operations.hasOp = function() {
	if (!this.currentOp) {
		return true;
	}
	return false
}
operations.evaluate = function() {
	if (this.hasInput() && this.hasOp()) {
		return
	}
	let output = document.getElementById('output')
	output.innerHTML = this[this.currentOp]();
	this.numOne = this[this.currentOp]();
}

