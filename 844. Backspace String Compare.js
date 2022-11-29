/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let size1 = s.length - 1;
  let size2 = t.length - 1;

  while (size1 >= 0 || size2 >= 0) {
    const getCharIndex1 = getCharIndexWithoutBackspace(s, size1);
    const getCharIndex2 = getCharIndexWithoutBackspace(t, size2);
    if (
      getCharIndex1 === 0 &&
      getCharIndex2 === 0 &&
      s[getCharIndex1] === t[getCharIndex2]
    )
      return true;
    if (getCharIndex1 === -1 && getCharIndex2 === -1) return true;
    if (s[getCharIndex1] !== t[getCharIndex2]) return false;
    if (getCharIndex1 < 0 || getCharIndex2 < 0) return false;
    size1 = getCharIndex1 - 1;
    size2 = getCharIndex2 - 1;
  }
};

function getCharIndexWithoutBackspace(str, index) {
  let backspace = 0;
  while (index >= 0) {
    if (str[index] === '#') {
      backspace++;
    } else if (backspace > 0) {
      backspace--;
    } else break;

    index--;
  }
  return index;
}

console.log(backspaceCompare('bxj##tw', 'bxj###tw'));
