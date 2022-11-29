/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const sortedArray = nums.sort((a, b) => a - b);
  let finalArray = [];
  const findSum = (arr, first, second) => {
    let start = second + 1;
    let end = arr.length - 1;
    while (start < end) {
      const sum = arr[start] + arr[first] + arr[second] + arr[end];
      if (sum === target) {
        finalArray.push([arr[start], arr[end], arr[first], arr[second]]);
        start++;
        end--;
        while (start < end && arr[start] === arr[start - 1]) start++;
        while (start < end && arr[end] === arr[end + 1]) end--;
      } else if (sum > target) end--;
      else start++;
    }
  };
  for (let i = 0; i < sortedArray.length; i++) {
    if (i === 0 || sortedArray[i] !== sortedArray[i - 1]) {
      for (let j = i + 1; j < sortedArray.length; j++) {
        if (j === i + 1 || sortedArray[j] !== sortedArray[j - 1]) {
          findSum(sortedArray, i, j);
        }
      }
    }
  }
  return finalArray;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
