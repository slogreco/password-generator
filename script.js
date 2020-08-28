// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){
let abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let abcUpperArr = abcUpper.split("");
let abcLower = "abcdefghijklmnopqrstuvwxyz";
let abcLower = abcLower.split("");
let num = "1234567890";
let numArr = num.split("");
let sym = "!@#$%^&*()_+-=[]\{}|;:,./<>`~";
let symArr = sym.split("");

  // Password is currently blank! We need to make a better one
  let password = "";
  let allChars = [];







  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
