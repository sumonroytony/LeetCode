/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {
    let sum = 0;
    let stack = [];
    for(let i=0; i< operations.length; i++){
        const str = operations[i];
        if(str === 'C'){
            const removedEl = stack.pop();
            sum = sum - removedEl;
            
        }
        else if(str === "D"){
            stack.push(stack[stack.length-1] *2)
            sum = sum+ stack[stack.length -1]
        }
        else if(str === "+"){
            stack.push(Number(stack[stack.length -1]) + Number(stack[stack.length-2]))
            sum = sum +stack[stack.length -1]
        } 
        else {
            stack.push(operations[i]);
            sum = sum + Number(operations[i])
        }
      
        
    }
    return sum;
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))