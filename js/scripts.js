$(document).ready(function(){
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    let userNumber = parseInt($("input#userNumber").val());
    $(".outputNumber").text(translateToRomanNumeral(userNumber));
  

    
  })
})

function translateToRomanNumeral(number) {
  let remainder = 0;
  let result;

  // romanNumeralM(number);
  // romanNumeralD(number);
  // romanNumeralC(number);
  // romanNumeralL(number);
  // romanNumeralX(number);
  // romanNumeralV(number);
  //romanNumeralI(number);

  result = romanNumeralI(number);
  return result;
}





function romanNumeralI(number) {
  const dividedNumber = number/1
  return addI(dividedNumber)
}

function addI(number) {
  let iReturnString = "";
  for (i=0; i < number; i++) {
    iReturnString += "I"
  }

  return iReturnString
}


/* 

for (i=0; i < number.length; i++) {

  extractedNumber = number.charAt(number.length - i)

  divisibleNumber = extractedNumber + zero(i)
}

function zero(number) {

  if (0) {
    return ""
  } else if (1) {
    return "0"
  } else if (2)
}

*/








/* Input variable = 0
  result = DLIII


romanNumeralD(553) {
  divide number by 500

  1

  53
}

romanNumeralC (53) {
  53/100 = 0.1232321

  0
}

romanNumeralL (53)
  53/50

  1

  modulus 3 


  romanNumeralI (3)

  3/1

  3

  0
*/

