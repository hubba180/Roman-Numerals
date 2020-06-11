$(document).ready(function(){
  $("form#numberInput").submit(function(event){
    event.preventDefault();
    let userNumber = parseInt($("input#userNumber").val());
    $(".outputNumber").text(translateToRomanNumeral(userNumber));
  

    
  })
})

let remainder;

function translateToRomanNumeral(number) {
  let result;

  result = romanNumeralM(number) + romanNumeralD(remainder) + romanNumeralC(remainder) + romanNumeralL(remainder) + romanNumeralX(remainder) + romanNumeralV(remainder) + romanNumeralI(remainder);
  return result;
}

function romanNumeralM(number) {
  const dividedNumber = Math.floor(number / 1000);
  const modNumber = number % 1000;

  remainder = modNumber;
  return addM(dividedNumber);
}

function addM(number) {
  let mReturnString = "";
  for (i=0; i < number; i++) {
    mReturnString += "M"
  }
  return mReturnString
}

function romanNumeralD(number) {
  const dividedNumber = Math.floor(number / 500);
  const modNumber = number % 500;

  remainder = modNumber;
  return addD(dividedNumber);
}

function addD(number) {
  let dReturnString = "";
  for (i=0; i < number; i++) {
    dReturnString += "D"
  }
  return dReturnString
}

function romanNumeralC(number) {
  const dividedNumber = Math.floor(number / 100);
  const modNumber = number % 100;

  remainder = modNumber;
  return addC(dividedNumber);
}

function addC(number) {
  let cReturnString = "";
  for (i=0; i < number; i++) {
    cReturnString += "C"
  }
  return cReturnString
}

function romanNumeralL(number) {
  const dividedNumber = Math.floor(number / 50);
  const modNumber = number % 50;

  remainder = modNumber;
  return addL(dividedNumber);
}

function addL(number) {
  let lReturnString = "";
  for (i=0; i < number; i++) {
    lReturnString += "L"
  }
  return lReturnString
}

function romanNumeralX(number) {
  const dividedNumber = Math.floor(number / 10);
  const modNumber = number % 10;

  remainder = modNumber;
  return addX(dividedNumber);
}

function addX(number) {
  let xReturnString = "";
  for (i=0; i < number; i++) {
    xReturnString += "X"
  }
  return xReturnString
}

function romanNumeralV(number) {
  const dividedNumber = Math.floor(number / 5)
  const modNumber = number % 5

  remainder = modNumber;
  return addV(dividedNumber);
}

function addV(number) {
  let vReturnString = "";
  for (i=0; i < number; i++) {
    vReturnString += "V"
  }
  return vReturnString
}

function romanNumeralI(number) {
  const dividedNumber = Math.floor(number/1)
  return addI(dividedNumber)
}

function addI(number) {
  let iReturnString = "";
  if (number >= 4) {
    iReturnString = "IV"
    for (i=4; i < number; i++) {
      iReturnString += "I"
    }
  } else {
    for (i=0; i < number; i++) {
      iReturnString += "I"
    }
  }

  return iReturnString
}
