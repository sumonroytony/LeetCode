/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let windowStart = 0;
  for (let windowEnd = k - 1; windowEnd < arr.length; windowEnd++) {
    const leftCalcVal = Math.abs(arr[windowStart] - x);
    const rightCalcVal = Math.abs(arr[windowEnd] - x);
    console.log(leftCalcVal, rightCalcVal);
    if (rightCalcVal === leftCalcVal || leftCalcVal === rightCalcVal + 1) {
      const _arr = [];
      for (let i = 0; i < k; i++) {
        _arr.push(arr[i]);
      }
      return _arr;
    } else {
      windowStart++;
    }
  }
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
