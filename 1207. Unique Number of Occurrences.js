// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// var uniqueOccurrences = function (arr) {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj.hasOwnProperty(arr[i])) obj[arr[i]]++;
//     else obj[arr[i]] = 1;
//   }
//   //   console.log(obj);
//   const keys = Object.keys(obj);
//   for (let i = 0; i < keys.length - 1; i++) {
//     for (let j = i + 1; j < keys.length; j++) {
//       if (obj[keys[i]] === obj[keys[j]]) return false;
//     }
//   }

//   return true;
// };

/**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
var uniqueOccurrences = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  //   console.log(obj);
  const keys = Object.values(obj);
  return keys.length === new Set(keys).size;
};

console.log(uniqueOccurrences([1, 2]));
