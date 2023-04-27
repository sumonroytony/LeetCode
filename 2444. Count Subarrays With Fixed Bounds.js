/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let windowStart = 0;
  let subArray = 0;
  let isMink = false;
  let isMaxk = false;
  let minStart = 0;
  let maxStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    const _num = nums[windowEnd];
    if (_num < minK || _num > maxK) {
      isMink = false;
      isMaxk = false;
      windowStart++;
    }
    if (_num === minK) {
      isMink = true;
      minStart = windowEnd;
    }
    if (_num === maxK) {
      isMaxk = true;
      maxStart = windowEnd;
    }
    if (isMink && isMaxk) {
      subArray += Math.min(minStart, maxStart) - windowStart + 1;
    }
  }
  return subArray;
};

console.log(countSubarrays([3, 1, 5, 5, 7, 7], 1, 5));
