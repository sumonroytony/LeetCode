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
    if (obj.hasOwnProperty(s2[i])) {
      obj[s2[i]]--;
      if (obj[s2[i]] === 0) matchedLength++;
    }

    if (matchedLength === s1.length) return true;

    if (i >= s1.length - 1) {
      if (obj.hasOwnProperty[windowStart]) {
        if (obj[s2[windowStart]] === 0) {
          matchedLength--;
        }
        obj[s2[windowStart]]++;
      }
      windowStart++;
    }
  }
  return false;
};

console.log(checkInclusion('abc', 'ccccbbbbaaaa'));
