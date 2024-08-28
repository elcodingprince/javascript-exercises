const convertToCelsius = function(fahrenheit) {
  const newTemp = (fahrenheit - 32) * 5 / 9;
  
  return Math.round(newTemp * 10) / 10;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
