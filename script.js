// special characters
const specialCharString = "@#$%<^<!";
// numbers
const numberString = "0123456789";
// lowerCase characters
const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
// upperCase characters 
const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Function to generate password
function writePassword() {
// blank array to fill with the characters the user selects in the prompts
  let passwordCharacterArray = [];
// blank string fo password to generate based on user preferences  
  let result = [];
  //  Prompts user to enter the password length they want
  const passwordLength = parseInt(prompt("How many characters would you like your password to be? Must but at least 8 characters and no more than 128."));

  // Conditional Gate
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Please choose a number no less than 8 and no greater than 128.");
  }

  //  If statementconfirms password requirements are met and begins character choice confirmations
  
  let specialChar = confirm("Would you like your password to contain special characters?");
  let wantNumbers = confirm("Would you like your password to contain numbers?");
  let wantLowerCase = confirm("Would you like your password to contain lowercase letters?");
  let wantUpperCase = confirm("Would you like your password to contain uppercase letters?");

    // Conditional Gate
    if (
      !specialChar &&
      !wantNumbers &&
      !wantLowerCase &&
      !wantUpperCase) {
      
      return alert("Please select at least one.")
    }

    // if special characters were confirmed concatenate them to empty array
  if (specialChar) {
    passwordCharacterArray += specialCharString;

  }
  
  // if numbers were confirmed concatenate them to empty array
  if (wantNumbers) {
    passwordCharacterArray += numberString;

  }
  // if lowercase characters were confirmed concatenate them to empty array
  if (wantLowerCase) {
    passwordCharacterArray = passwordCharacterArray.concat(lowerCaseString);

  }
  // if uppercase characters were confirmed concatenate them to empty array
  if (wantUpperCase) {
    passwordCharacterArray = passwordCharacterArray.concat(upperCaseString);

  }

//  for loop generating random characters pulled from the passwordCharacterArray
  for (let i = 0; i < passwordLength; i++) {
// this variable generates a random index number from the passwordCharacterArray
    let randomIndex = Math.floor(Math.random() * passwordCharacterArray.length - 1);
// this variable is set to the random index value from passwordCharacterArray
    let temp = passwordCharacterArray[randomIndex];
// push the results of temp to my 'results' array until the for loop is satisfied
    result.push(temp);

  }
//  adds all elements to 'results' array and returns the value
  return result.join('');

}
// Generate Password function
function generatePassword() {
// Assignment code
  let passwordEl = document.querySelector("#password");
// Assignment code
  let passwordFinal = writePassword();
// sets the value of password area equal to passwordFinal(main function)
  passwordEl.value = passwordFinal

}

// Assignment Code
let generateBtn = document.querySelector("#generate");


// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);

