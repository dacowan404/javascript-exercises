const reverseString = function(inputString) {
  let temp = '';
  for (let i = inputString.length-1; i >=0; i--) {
    temp += inputString.charAt(i);
  }
  return temp;
};

// Do not edit below this line
module.exports = reverseString;
