const repeatString = function(string, num) {
    let result = '';
    while (num) {
        result += string;
        num--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
