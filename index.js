
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
	let nums = this.parseNumArray()
	document.getElementById('current-one').innerHTML = nums[0];
	if (this.numTwo.length > 0) {
		document.getElementById('current-two').innerHTML = nums[1];
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
	this.numOne = [];
	this.numTwo = [];
	this.currentOp = null;
}	

operations.parseNumArray = function() {
	let numOne = parseInt((this.numOne).join(''))
	let numTwo = parseInt((this.numTwo).join(''))
	return [numOne, numTwo]
}

