/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let nums1WindowStart = 0;
  let nums2WindowStart = 0;
  let maxLength = 0;

  for (
    let nums1WindowEnd = 0;
    nums1WindowEnd < nums1.length;
    nums1WindowEnd++
  ) {
    const nums1LeftChar = nums1[nums1WindowEnd];
  }
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
