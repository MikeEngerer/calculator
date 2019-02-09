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
}

operations.changeNum = function(num) {
	!this.numOne ? this.numOne = parseInt(num) : this.numTwo = parseInt(num)
	return console.log(this)
}

operations.evaluate = function() {
	if (this.hasInput()) {
		return
	}
	let output = document.getElementById('output')
	output.innerHTML = this[this.currentOp]();
	this.numOne = this[this.currentOp]();
}

operations.displayNums = function() {
	let one = document.getElementById('current-one')
	let two = document.getElementById('current-two')
	one.innerHTML = this.numOne;
	two.innerHTML = this.numTwo;
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
