// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 14)
  const sortedArr = A.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i <= sortedArr[sortedArr.length - 1]; i++) {
    if (sortedArr[i] > 0 || sortedArr[i] === undefined) {
      if (sortedArr[i] !== count) return count;
      else if (sortedArr[i] !== sortedArr[i + 1]) count++;
    }
  }
  if (count > 1) return sortedArr[sortedArr.length - 1] + 1;
  else return 1;
}

console.log(solution([1, 1, 1]));
