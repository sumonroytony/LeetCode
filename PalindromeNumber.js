const returnModules = (divider, remainder) => {
  if (divider < 1) {
    return remainder;
  } else {
    remainder = remainder * 10 + (divider % 10);
    return returnModules(Math.trunc(divider / 10), remainder);
  }
};

var isPalindrome = function (x) {
  if (returnModules(x, 0) === x) return true;
  else return false;
};

console.log(isPalindrome(121));
