/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let windowStart = 0;
  const charObj = {};
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (!charObj.hasOwnProperty(rightChar)) {
      charObj[rightChar] = 0;
    }
    charObj[rightChar] = charObj[rightChar] + 1;
    while (Object.keys(charObj).length > 2) {
      const leftChar = s[windowStart];
      charObj[leftChar] = charObj[leftChar] - 1;
      if (charObj[leftChar] === 0) {
        delete charObj[leftChar];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb'));
