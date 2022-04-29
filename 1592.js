var reorderSpaces = function (text) {
  const textArray = text.split("");
  const finalArray = [];
  let spaceCount = 0;
  let wordCount = 0;
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === " ") {
      spaceCount++;
    } else {
      if (textArray[i + 1] == " ") {
        wordCount++;
      }
    }
  }
  console.log(spaceCount, wordCount);
  //   const wordSpaceCount = spaceCount/wordCount;
  //   const remainSpace = spaceCount % wordCount;
  //   let trackWord = false;
  //   for(let i =0; i<textArray.length; i++){
  //       if(textArray[i] !== ' '){
  //         finalArray.push(textArray[i]);
  //       } else {
  //           if(finalArray.length > 0){
  //               trackWord = true;

  //           }
  //       }
  //   }
};

console.log(reorderSpaces("  this   is  a sentence "));
