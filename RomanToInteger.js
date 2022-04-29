// first solution
// var romanToInt = function (s) {
//   const obj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let count = 0;
//   const arr = s.split("");
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === "V" || arr[i] === "X") {
//       if (arr[i - 1] === "I") count -= 2;
//     }
//     if (arr[i] === "L" || arr[i] === "C") {
//       if (arr[i - 1] === "X") count -= 20;
//     }
//     if (arr[i] === "D" || arr[i] === "M") {
//       if (arr[i - 1] === "C") count -= 200;
//     }

//     count += obj[arr[i]];
//     console.log(count);
//   }
//   return count;
// };
// -----------end first solution

// ----------second solution
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let count = 0;
  s.split("").forEach((num, i) => {
    console.log(obj[num], obj[s[i + 1]]);
    console.log(obj[num] < obj[s[i + 1]]);
    if (obj[num] < obj[s[i + 1]]) count -= obj[num];
    else count += obj[num];
    console.log(count);
  });
  return count;
};
console.log(romanToInt("MCMXCIV"));
