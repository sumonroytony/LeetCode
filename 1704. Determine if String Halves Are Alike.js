/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let str1VowelCount = 0;
  let str2VowelCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length / 2) {
      if (findVowel(s[i])) str1VowelCount++;
    } else {
      if (findVowel(s[i])) str2VowelCount++;
    }
  }
  return str1VowelCount === str2VowelCount;
};

function findVowel(char) {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u' ||
    char === 'A' ||
    char === 'E' ||
    char === 'I' ||
    char === 'O' ||
    char === 'U'
  )
    return true;
  return false;
}

console.log(halvesAreAlike('Ieai'));
