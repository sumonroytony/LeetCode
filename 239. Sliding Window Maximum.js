/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const finalArray = [];
  let windowStart = 0;
  if (nums.length === 1 || k === 1) return nums;
  let maxNumber = null;
  for (let windowEnd = k - 1; windowEnd < nums.length; windowEnd++) {
    for (let i = 0; i < windowEnd; i++) {}
  }
  return finalArray;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([7, 2, 4], 2));
