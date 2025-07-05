const convertToCelsius = function(tempF) {
  let val = ((tempF - 32) *(5/9)) *10
  return Math.round(val)/10
};

const convertToFahrenheit = function(tempC) {
  let val = (tempC * (9/5)) +32
  return Math.round(val*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
