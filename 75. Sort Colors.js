/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let i = 0;
  while (i <= end) {
    if (nums[i] === 0) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      i++;
      start++;
    } else if (nums[i] === 1) i++;
    else {
      [nums[i], nums[end]] = [nums[end], nums[i]];
      end--;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
