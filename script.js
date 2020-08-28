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
let abcLowerArr = abcLower.split("");
let num = "1234567890";
let numArr = num.split("");
let sym = "!@#$%^&*()_+-=[]\{}|;:,./<>`~";
let symArr = sym.split("");

  // Password is currently blank! We need to make a better one
  let password = "";
  let allChars = [];

let passLength = prompt("How many character would you like your password (8-128)");

if (passLength < 8 || passLength > 128){
  alert("Password can only be a whole number between 8 and 128");
}

if (confirm("Should password contain uppercase letters?")) {
  Array.prototype.apply(allChars, abcUpperArr);
}



  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
