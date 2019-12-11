// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the len)

var detectNetwork = function(cardNumber) {
  var len=cardNumber.length;
  var oneDigit=cardNumber.slice(0,1);
  var twoDigits=cardNumber.slice(0,2);
  var threeDigits=cardNumber.slice(0,3);
  var fourDigits=cardNumber.slice(0,4);
  var sixDigits=cardNumber.slice(0,6);

if(len===14 && (twoDigits==='38'|| twoDigits==='39'))
{
  return "Diner\'s Club";
}
else if(len===15 && (twoDigits==='34'|| twoDigits==='37'))
{
  return "American Express"
}
else if((len===13 || len===16 || len===19) && oneDigit==='4')
{
  if(fourDigits==='4936' || fourDigits==='4911' || fourDigits==='4905' || fourDigits==='4903')
      return "Switch"
  else
        return "Visa"
}
else if(len===16 && (parseInt(twoDigits)>=51 && parseInt(twoDigits)<=55))
{
  return "MasterCard"
}
else if((len===16 || len===19) && (fourDigits==='6011'  || (parseInt(threeDigits)>=644 && parseInt(threeDigits)<=649 || twoDigits==='65') ))
{
  return "Discover"
}
else if((len>=12 && len<=19) && (fourDigits==='5018' || fourDigits==='5020' || fourDigits==='5038' || fourDigits==='6304'))
{
  return "Maestro"
}
else if( (len>=16 && len<=19) && ((parseInt(sixDigits)>=622126 && parseInt(sixDigits)<=622925) || (parseInt(threeDigits)>=624 && parseInt(threeDigits)<=626) || (parseInt(fourDigits)>=6282 && parseInt(fourDigits)<=6288)))
{
  return "China UnionPay"
}
//'4903', '4905', '4911', '4936', '564182', '633110', '6333','6759'
else if((len===16 || len===18 || len===19) && (fourDigits==='4903' || fourDigits==='4905' || fourDigits==='4911' || fourDigits==='4936' ||fourDigits==='6333' || fourDigits==='6759' || sixDigits==='564182' || sixDigits==='633110'))
{
  return "Switch"
}


  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
