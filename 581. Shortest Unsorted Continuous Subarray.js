/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let startPos = 0;
  let endPos = nums.length - 1;

  while (startPos < endPos) {
    if (nums[startPos] <= nums[startPos + 1]) startPos++;
    if (nums[endPos] >= nums[endPos - 1]) endPos--;

    if (
      nums[startPos] > nums[startPos + 1] &&
      nums[endPos] < nums[endPos - 1] &&
      nums[startPos] !== nums[startPos + 1] &&
      nums[endPos] !== nums[endPos - 1]
    ) {
      console.log(
        nums[startPos],
        nums[startPos + 1],
        nums[endPos],
        nums[endPos]
      );
      break;
    }
  }
  if (startPos === endPos) return 0;
  return endPos - startPos + 1;
};

console.log(findUnsortedSubarray([1, 3, 2, 2, 2]));
