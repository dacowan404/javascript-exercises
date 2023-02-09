const palindromes = function (inputString) {
  let trimmedString = inputString.toLowerCase().trim()
  trimmedString = trimmedString.replace(/\W/g, "");
  let length = Math.floor(trimmedString.length/2);

  for (let i = 0; i <= length; i++) {
    if (trimmedString.charAt(i) === trimmedString.charAt(trimmedString.length-1-i)) {
      continue
    }
    else {
      return false;
    }
  }
  return true;

};

// Do not edit below this line
module.exports = palindromes;
