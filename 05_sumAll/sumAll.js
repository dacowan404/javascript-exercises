const sumAll = function(num1, num2) {
  if (!(typeof num1 == "number")) {
    return "ERROR";
  }
  if (!(typeof num2== "number")) {
    return "ERROR";
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  let small, big;

  if (num1 <= num2) {
    small = num1;
    big = num2;
  }
  else {
    small = num2;
    big = num1;
  }
  
  let temp = 0;
  for (let i=small; i <= big; i++) {
    temp += i;
  }
  return temp;
};

// Do not edit below this line
module.exports = sumAll;
