
const operations = {
	numOne: [],
	numTwo: [],
	currentNum: 'numOne'
};

const conversions = {
	add: '+',
	subtract: '-',
	multiply: '*',
	divide: '/'
}

operations.add = function() {
	let nums = this.parseNumArray()
	console.log(nums)
	return nums[0] + nums[1];
}

operations.subtract = function() {
	let nums = this.parseNumArray()
	return nums[0] - nums[1];
}

operations.divide = function() {
	let nums = this.parseNumArray()
	return nums[0] / nums[1];
}

operations.multiply = function() {
	let nums = this.parseNumArray()
	return nums[0] * nums[1];
}


operations.changeOp = function(type) {
	this.currentOp = type
	document.getElementById('current-op').innerHTML = conversions[this.currentOp]
	this.nextNum()

}

operations.changeNum = function(num) {
	this.currentNum === 'numOne' ? this.numOne.push(num) : this.numTwo.push(num)

	this.displayNums()
}

operations.nextNum = function() {
	this.currentNum === 'numOne' ? this.currentNum = 'numTwo' : this.currentNum = 'numOne'
}

operations.displayNums = function() {
	document.getElementById('current-one').innerHTML = parseInt((this.numOne).join(''));
	if (this.numTwo.length > 0) {
		document.getElementById('current-two').innerHTML = parseInt((this.numTwo).join(''));
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
	this.numOne = [];
	this.numTwo = [];
	this.currentOp = null;
}	

operations.parseNumArray = function() {
	let numOne = parseInt((this.numOne).join(''))
	let numTwo = parseInt((this.numTwo).join(''))
	console.log(numOne, numTwo)
	return [numOne, numTwo]
}

