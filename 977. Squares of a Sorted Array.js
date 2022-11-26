/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let leftNum = 0;
  let length = nums.length;
  let rightNum = length - 1;
  let highestIdx = length - 1;
  const sortedSqr = Array(length).fill(0);
  while (leftNum <= rightNum) {
    const leftSqr = nums[leftNum] * nums[leftNum];
    const rightSqr = nums[rightNum] * nums[rightNum];
    if (leftSqr < rightSqr) {
      sortedSqr[highestIdx] = rightSqr;
      rightNum--;
    } else {
      sortedSqr[highestIdx] = leftSqr;
      leftNum++;
    }
    highestIdx--;
  }
  return sortedSqr;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
