const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(numbers) {
  return numbers.reduce((acc, number) => {
    return acc + number;
  },0)

	
};

const multiply = function(numbers) {
  return numbers.reduce((acc,number) => {
    return acc*number;
  },1)

};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
	if (num <=1){
    return 1;
  }
  else{
    return num * factorial(num-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
