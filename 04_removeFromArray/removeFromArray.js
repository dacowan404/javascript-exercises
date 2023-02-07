const removeFromArray = function(inputArray, ...valuesToRemove) {
  for (let value of valuesToRemove) {
    let temp;
    for (let i = 0; i < inputArray.length; i++) {
      if (value === inputArray[i]) {
        temp = i;
        break;
      }
    }
    if (!(temp === undefined)) {
      inputArray.splice(temp, 1);
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
