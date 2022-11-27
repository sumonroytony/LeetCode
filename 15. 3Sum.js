/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedArray = nums.sort((a, b) => a - b);
  const finalArray = [];
  const find = (arr, finalArray, left, target) => {
    let right = arr.length - 1;
    while (left < right) {
      const val = arr[left] + arr[right];
      if (val === target) {
        finalArray.push([-target, arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right++;
      } else if (target < val) {
        right--;
      } else {
        left++;
      }
    }
  };

  for (let i = 0; i < sortedArray.length; i++) {
    if (i === 0 || sortedArray[i] !== sortedArray[i - 1]) {
      find(sortedArray, finalArray, i + 1, -sortedArray[i]);
    }
  }
  return finalArray;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
