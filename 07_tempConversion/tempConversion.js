const convertToCelsius = function(fahrenheitTemp) {
  temp = fahrenheitTemp - 32
  celsiusTemp = temp * 5/9

  let isWhole 
  if (celsiusTemp % 0 == 0){
    isWhole = true
  }
  else{
    isWhole = false
  }

  if (isWhole==true){
    return celsiusTemp 
  }
  else{
    return Number(celsiusTemp.toFixed(1))
  }


}

const convertToFahrenheit = function(celsiusTemp) {
  temp = celsiusTemp*1.8
  fahrenheitTemp = temp + 32

  let isWhole 
  if (fahrenheitTemp % 0 == 0){
    isWhole = true
  }
  else{
    isWhole = false
  }


  if (isWhole==true){
    return fahrenheitTemp 
  }
  else{
    return Number(fahrenheitTemp.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
