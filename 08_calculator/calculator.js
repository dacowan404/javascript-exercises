const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
	let  temp = 0;
  for (let num of x) {
    temp += parseInt(num);
  }
  return temp;
};

const multiply = function(x) {
  let temp = 1;
  for (let num of x) {
    temp *= num;
  }
  return temp;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let temp = 1;
  for (let i=x; i>0; i--) {
    temp *= i;
  }
  return temp;
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
