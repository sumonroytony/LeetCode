/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (arr.pop() !== "(") return false;
    } else if (s[i] === "}") {
      if (arr.pop() !== "{") return false;
    } else if (s[i] === "]") {
      if (arr.pop() !== "[") return false;
    } else {
      arr.push(s[i]);
    }
  }
  if (arr.length === 0) return true;
  else return false;
};

console.log(isValid("([]{})"));
