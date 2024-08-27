const removeFromArray = function(array, ...valuesToRemove) {
        // Convert valuesToRemove to a Set for efficient look-up
        const setToRemove = new Set(valuesToRemove);
    
        // Filter the array, only keeping elements not in the setToRemove
        return array.filter(item => !setToRemove.has(item));
    
};

// Do not edit below this line
module.exports = removeFromArray;
