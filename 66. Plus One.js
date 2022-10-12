/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i > 0; i++) {
    if (digits[i] === 9) digits[i] = 0;
    else {
      digits[i] = digits[i] + 1;
      return digits;
    }
    i--;
  }

  const newArray = new Array(digits.length + 1).fill(0);
  console.log(newArray);
  newArray[0] = 1;
};

console.log(plusOne([9, 9, 9, 9, 9]));
