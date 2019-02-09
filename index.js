let operations = {
	currentOp: null,
	numOne: 0,
	numTwo: 0
}

operations.add = function() {
	console.log(this)
	return this.numOne + this.numTwo;
}

operations.subtract = function() {
	return this.numOne - this.numTwo;
}

operations.divide = function() {
	return this.numOne / this.numTwo;
}

operations.multiply = function() {
	return this.numOne / this.numTwo;
}


operations.changeOp = function(type) {
	operations.currentOp = type
}

operations.numOne = 10
operations.numTwo = 20
console.log(operations)
