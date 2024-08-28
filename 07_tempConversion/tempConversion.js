const convertToCelsius = function(fahrenheit) {
  const newTemp = (fahrenheit - 32) * 5 / 9;
  result += newTemp
  const roundedNewTemp = Math.round(result * 10) / 10;
  return roundedNewTemp;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
