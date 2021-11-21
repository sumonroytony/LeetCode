//solution 1

// var isPalindrome = function (x) {
//   let palindrome = '';
//   x.toString()
//     .split("")
//     .forEach((el) => {
//         palindrome = el + palindrome;
//     });
//   if (x === Number(palindrome)) {
//     return true;
//   } else return false;
// };

//solution 2
var isPalindrome = function (x) {
  function palindrome() {
    return x.toString().split("").reverse().join("");
  }
  if (x === Number(palindrome())) {
    return true;
  } else return false;
};
