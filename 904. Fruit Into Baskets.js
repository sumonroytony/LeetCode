/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let obj = {};
  let startPos = 0;
  let maxLength = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (obj.hasOwnProperty(fruits[i])) obj[fruits[i]]++;
    else obj[fruits[i]] = 1;
    console.log(obj);
    while (Object.keys(obj).length > 2) {
      obj[fruits[startPos]]--;
      if (obj[fruits[startPos]] === 0) delete obj[fruits[startPos]];
      startPos++;
    }

    maxLength = Math.max(maxLength, i - startPos + 1);
  }
  return maxLength;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
