const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0 || !Number.isInteger(numOne) || Number.isInteger(numTwo)) return "ERROR";

    let finalSum = 0;
    let smallerNum;
    let largerNum; 
    if (numOne < numTwo) {
        smallerNum = numOne;
        largerNum = numTwo; 
    } else {
        smallerNum = numTwo;
        largerNum = numOne;
    }
    for (let i = smallerNum; i <= largerNum; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
