// special characters
const specialCharArray = ['@', '#', '$', '%', '<', '^', '<', '!'];
// numbers
const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// lowerCase characters
const lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// upperCase characters 
const upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// blank array to fill with the characters the user selects in the prompts
let passwordCharacterArray = [];
// blank string fo password to generate based on user preferences  
let result = [];

// Function to generate password
function writePassword() {
  //  Prompts user to enter the password length they want
  const passwordLength = parseInt(prompt("How many characters would you like your password to be? Must but at least 8 characters and no more than 128."));

  // Conditional Gate
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Please choose a number no less than 8 and no greater than 128.");
  }