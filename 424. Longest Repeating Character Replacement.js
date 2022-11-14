// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {number}
//  */
// var characterReplacement = function (str, k) {
//   let windowStart = 0;
//   let maxRepeatLetterCount = 0;
//   let frequencyMap = {};
//   let maxLength = 0;

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];
//     if (!(rightChar in frequencyMap)) {
//       frequencyMap[rightChar] = 0;
//     }
//     frequencyMap[rightChar] += 1;
//     maxRepeatLetterCount = Math.max(
//       maxRepeatLetterCount,
//       frequencyMap[rightChar]
//     );
//     if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
//       let leftChar = str[windowStart];
//       frequencyMap[leftChar] -= 1;
//       windowStart += 1;
//     }
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// };

// console.log(characterReplacement('AABABBB', 1));

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const obj = {};
  let maxCount = 0;
  let maxLength = 0;
  let windowStart = 0;

  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }

    maxCount = Math.max(maxCount, obj[s[i]]);

    if (i - windowStart + 1 - maxCount > k) {
      obj[s[windowStart]] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;
};

console.log(characterReplacement('AABABBA', 1));
