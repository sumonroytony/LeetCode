/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let window = 0;
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) k--;
    if (k < 0) {
      if (nums[window] === 0) k++;
      window++;
    }
  }

  return i - window;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
