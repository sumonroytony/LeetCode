function lengthOfLastWord(s) {
  let count = 0;
  for (let i = s.length; i > 0; i--) {
    if (s[i - 1] !== ' ') {
      count++;
    } else if (count !== 0) {
      return count;
    }
  }
  return count;
}

console.log(lengthOfLastWord('hello world   '));
