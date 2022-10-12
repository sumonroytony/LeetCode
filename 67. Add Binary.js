/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let bigString;
    let smallString;
    let carry= 0;
    let result='';
    if(a.length > b.length) {
        bigString = a;
        smallString = b
    } else {
        bigString = b;
        smallString = a;
    }

    for(let i = 1; i<= bigString.length || carry > 0; i++){
        let small = smallString[smallString.length - i] || 0
        let big = bigString[bigString.length -i] || 0
        const tempResult= Number(big) + Number(small) + carry;
       if(carry)
        if(tempResult >=2) {
            result = '1' + result;
            carry = carry + tempResult;
        } else result = `${tempResult}${result}`
    }
    return result;
};


console.log(addBinary('11', '10'))