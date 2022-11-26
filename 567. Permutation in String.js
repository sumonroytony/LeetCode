/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let matchedLength = 0;
  let obj = {};
  let windowStart = 0;
  if (s2.length < s1.length) return false;
  for (let i = 0; i < s1.length; i++) {
    obj[s1[i]] = 1;
  }

  for (let i = 0; i < s2.length; i++) {
    const rightChar = s2[i];
    if (obj.hasOwnProperty(rightChar)) {
      obj[rightChar]--;
      if (obj[rightChar] === 0) matchedLength++;
    }

    if (matchedLength === s1.length) return true;

    if (i >= s1.length - 1) {
      const leftChar = s2[windowStart];
      windowStart++;
      if (obj.hasOwnProperty(leftChar)) {
        if (obj[leftChar] === 0) {
          matchedLength--;
        }
        obj[leftChar]++;
      }
    }
  }
  return false;
};

console.log(checkInclusion('abcdxabcde', 'abcdeabcdx'));

// "abcdxabcde"
// "abcdeabcdx"
