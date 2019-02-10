
const operations = {};

const conversions = {
	add: '+',
	subtract: '-',
	multiply: '*',
	divide: '/'
}

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
	document.getElementById('current-op').innerHTML = conversions[this.currentOp]
}

operations.changeNum = function(num) {
	if (this.numTwo) { this.clear() } 
	!this.numOne ? this.numOne = parseInt(num) : this.numTwo = parseInt(num)
	this.displayNums()
}

operations.displayNums = function() {
	document.getElementById('current-one').innerHTML = this.numOne;
	if (this.numTwo) {
		document.getElementById('current-two').innerHTML = this.numTwo;
	}
}

operations.hasInput = function() {
	return this.hasOwnProperty('numOne') && this.hasOwnProperty('numTwo')
}

operations.hasOp = function() {
	return this.hasOwnProperty('currentOp')
}
operations.evaluate = function() {
	if (this.hasInput() && this.hasOp()) {
		document.getElementById('answer').value = this[this.currentOp]()		
	} else {
		alert('Must provide nums and op')
	}
}

operations.clear = function() {
	document.getElementById('current-two').innerHTML = null;
	document.getElementById('current-one').innerHTML = null;
	document.getElementById('current-op').innerHTML = null;
	document.getElementById('output').innerHTML = null;
	document.getElementbyId('trivia').innerHTML = null;
	this.numOne = null;
	this.numTwo = null;
	this.currentOp = null;
}	

