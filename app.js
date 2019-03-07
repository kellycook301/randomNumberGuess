var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// !== means 'not equal to'
// first generates a random number from 1-10000 then stores it in the randomNumber variable
// evaluates the condition. It does not match randomNumber
// this happens over and over until the numbers match

while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );
  attempts += 1;
}
document.write("<p>The random number was: " + randomNumber + "<p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");