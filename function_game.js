

alert ("The computer has picked a secret number. See if you can guess it!");
var username = prompt("What is your name?");



var secretNumber = Math.floor(Math.random() * (101 - 0 + 1)) + 0;
  // Returns a random integer between
  console.log(secretNumber);

var count = 0
while (secretNumber != guess && count < 3) {
//while secret number does not equal guess and the count is less than 3 it will run
  var guess = prompt("Enter a number");
  // prompting to guess a number and storing var in var guess
  guess = parseInt(guess); // changes string into a integer

  if (guess === secretNumber) {
    // boolean if guess and secretNumber match
  alert("Winner winner chicken dinner, " + username);
  }
// if boolean matches then the alert will be in action
  if (guess < secretNumber) {
    //less than = too low
    alert("too low");
    count = count + 1;
  }

    if(guess > secretNumber) {
    count = count + 1;
    alert("too high");
    // not less than = too high
  }
  //outside of while loop
}
if (count === 3) {
  alert("loser");
}
//once count is equal to three you lost
