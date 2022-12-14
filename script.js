// Assignment code here

// Function to ask user for password length
function charLength () {
  // Ask user to input length of password, between 8 and 128
  var passLength = window.prompt("Please determine length of password: select an integer (inclusive) between 8 and 128.");
  
  // Validates user input for password length
  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  }
  else {
    window.alert("You need to provide a valid answer! Please try again, reminder: the length must be between 8 and 128.");
    // Calls function again
    return charLength();
  }
};

// Function to ask user if password needs uppercase characters
function upperCase () {
  // Ask user to indicate if upper case characters are needed
  var upperCaseConfirm = window.prompt("Does your password need upper case characters? Press 1 for YES, or 2 for NO.");
  // Chbanges user input to interger type
  upperCaseConfirm = parseInt(upperCaseConfirm);
  
  // Validates user input
  if (upperCaseConfirm === 1) {
    return true;
  }
  else if (upperCaseConfirm === 2) {
    return false;   
  }
  else {
    window.alert("You need to provide a valid answer. Please try again.");
    return upperCase();
  }
}

// Function to ask user if password needs lowercase characters
function lowerCase () {
  // Ask user to indicate if lower case characters are needed
  var lowerCaseConfirm = window.prompt("Does your password need lower case characters? Press 1 for YES, or 2 for NO.");
  // Chbanges user input to interger type
  lowerCaseConfirm = parseInt(lowerCaseConfirm);
  
  // Validates user input
  if (lowerCaseConfirm === 1) {
    return true;
  }
  else if (lowerCaseConfirm === 2) {
    return false;   
  }
  else {
    window.alert("You need to provide a valid answer. Please try again.");
    return lowerCase();
  }
}

// Function to ask user if password needs numbers
function numbers () {
  // Ask user to indicate if lower case characters are needed
  var numbersConfirm = window.prompt("Does your password need numbers? Press 1 for YES, or 2 for NO.");
  // Chbanges user input to interger type
  numbersConfirm = parseInt(numbersConfirm);
  
  // Validates user input
  if (numbersConfirm === 1) {
    return true;
  }
  else if (numbersConfirm === 2) {
    return false;   
  }
  else {
    window.alert("You need to provide a valid answer. Please try again.");
    return numbers();
  }
}

// Function to ask user if password needs special characters
function special () {
  // Ask user to indicate if lower case characters are needed
  var specialConfirm = window.prompt("Does your password need special characters? Press 1 for YES, or 2 for NO.");
  // Chbanges user input to interger type
  specialConfirm = parseInt(specialConfirm);
  
  // Validates user input
  if (specialConfirm === 1) {
    return true;
  }
  else if (specialConfirm === 2) {
    return false;   
  }
  else {
    window.alert("You need to provide a valid answer. Please try again.");
    return special();
  }
}

// Libraries of the different character types
const upperCaseLibrary = [
  "A", "B" , "C" , "D", "E", "F", "G" , "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
const lowerCaseLibrary = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
const numbersLibrary = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
const specialLibrary = [
  " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"
]

// Function to determine which character types will be used in the password generation
function charTypes() {
  // Calling the declared functions for each of the different charactere types
  var upperCaseChar = upperCase();
  var lowerCaseChar = lowerCase();
  var numbersChar = numbers();
  var specialChar = special();

  // Validating that at least one character type is selected
  if (upperCaseChar === false && lowerCaseChar === false && numbersChar === false && specialChar === false) {
    window.alert("You need at least one character type selected. Please try again.");
    return charTypes();
  }

  // If/else-if clauses for each libarary of characters to draw from
  if (upperCaseChar === true && lowerCaseChar === false && numbersChar === false && specialChar === false){
    return upperCaseLibrary;
  }
  else if (upperCaseChar === true && lowerCaseChar === true && numbersChar === false && specialChar === false) {
    return upperCaseLibrary.concat(lowerCaseLibrary);
  }
  else if (upperCaseChar === true && lowerCaseChar === false && numbersChar === true && specialChar === false) {
    return upperCaseLibrary.concat(numbersLibrary);
  }
  else if (upperCaseChar === true && lowerCaseChar === false && numbersChar === false && specialChar === true) {
    return upperCaseLibrary.concat(specialLibrary);
  }
  else if (upperCaseChar === true && lowerCaseChar === true && numbersChar === true && specialChar === false) {
    return upperCaseLibrary.concat(lowerCaseLibrary, numbersLibrary);
  }
  else if (upperCaseChar === true && lowerCaseChar === false && numbersChar === true && specialChar === true) {
    return upperCaseLibrary.concat(numbersLibrary, specialLibrary);
  }
  else if (upperCaseChar === true && lowerCaseChar === true && numbersChar === false && specialChar === true) {
    return upperCaseLibrary.concat(lowerCaseLibrary, specialLibrary);
  }
  else if (upperCaseChar === true && lowerCaseChar === true && numbersChar === true && specialChar === true) {
    return upperCaseLibrary.concat(lowerCaseLibrary, numbersLibrary, specialLibrary);
  }
  else if (upperCaseChar === false && lowerCaseChar === true && numbersChar === true && specialChar === true) {
    return lowerCaseLibrary.concat(numbersLibrary, specialLibrary);
  }
  else if (upperCaseChar === false && lowerCaseChar === true && numbersChar === false && specialChar === false) {
    return lowerCaseLibrary;
  }
  else if (upperCaseChar === false && lowerCaseChar === true && numbersChar === true && specialChar === false) {
    return lowerCaseLibrary.concat(numbersLibrary);
  }
  else if (upperCaseChar === false && lowerCaseChar === true && numbersChar === false && specialChar === true) {
    return lowerCaseLibrary.concat(specialLibrary);
  }
  else if (upperCaseChar === false && lowerCaseChar === false && numbersChar === true && specialChar === false) {
    return numbersLibrary;
  }
  else if (upperCaseChar === false && lowerCaseChar === false && numbersChar === true && specialChar === true) {
    return numbersLibrary.concat(specialLibrary);
  }
  else if (upperCaseChar === false && lowerCaseChar === false && numbersChar === false && specialChar === true) {
    return specialLibrary;
  }
}

// Password generation function
function generatePassword() {
  // Calls functions to determine password length and acceptable characters
  var passLength = charLength();
  var passLibrary = charTypes();
  
  // Initialize password with empty string
  password = ""
  // For loop to generate each character of the password randomly
  for (var i = 1; i <= passLength; i++) {
    // Using Math.floor and Math.random to determine the index of the passLibrary
    randomIndex = Math.floor(Math.random() * passLibrary.length);
    // Concatenating the randomly generated characters the password individually
    password = password + passLibrary[randomIndex];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
