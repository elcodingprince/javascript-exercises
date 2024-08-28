const leapYears = function(year) {
    // a year is a leap year 
    // if it is divisible by 400 OR 
    // if it is divisble by 4 but not 100
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
