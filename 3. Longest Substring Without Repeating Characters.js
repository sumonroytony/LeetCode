/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   const obj = {};
//   let startPos = 0;
//   let substrLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (!obj.hasOwnProperty(s[i])) obj[s[i]] = 1;
//     else obj[s[i]]++;

//     while (obj[s[i]] > 1) {
//       obj[s[startPos]]--;
//       if (obj[startPos] <= 0) delete obj[s[startPos]];
//       startPos++;
//     }

//     substrLength = Math.max(substrLength, i - startPos + 1);
//   }
//   return substrLength;
// };

//second solution
var lengthOfLongestSubstring = function (s) {
  const obj = {};
  let startPos = 0;
  let substrLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) startPos = Math.max(startPos, obj[s[i]] + 1);

    obj[s[i]] = i;
    substrLength = Math.max(substrLength, i - startPos + 1);
  }
  return substrLength;
};

console.log(lengthOfLongestSubstring('pwwkew'));
