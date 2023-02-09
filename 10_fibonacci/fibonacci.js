const fibonacci = function(x) {
  if (x < 0) {
    return "OOPS";
  }
  results = {
    0 : 0,
    1 : 1,
  }
  for (let i = 2; i <= x; i++) {
    results[i] = results[i-1] + results[i-2];
  }
  return results[x];


};

// Do not edit below this line
module.exports = fibonacci;
