function strStr(haystack: string, needle: string): number {
  if (needle.length <= 0) return 0;
  let count = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[count]) {
      ++count;
    } else {
      if (count > 0) {
        i = i - count;
      }
      count = 0;
    }
    if (count === needle.length) return i - count + 1;
  }
  return -1;
}

console.log(strStr('a', 'a'));
