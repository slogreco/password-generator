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
function generatePassword() {
  let abcUpper = confirm("Should password contain uppercase characters?")
  let abcLower = confirm("Should password contain lower characters?")
  let num = confirm("Should password contain numbers?")
  let special = confirm("Should password contain special characters?")

  let abcUpperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let abcLowerArr = "abcdefghijklmnopqrstuvwxyz";
  let numArr = "1234567890";
  let specialArr = "!@#$%^&*()_+-=[]\{}|;:,./<>`~";

  let passLength = prompt("How many character would you like your password (8-128)");

  if (passLength < 8 || passLength > 128) {
    alert("Password can only be a whole number between 8 and 128");
  }

  // Password is currently blank! We need to make a better one
  let password = "";
  let charArr = "";
  

  if (abcUpper) {
    charArr = charArr + abcUpperArr
  }

  if (abcLower) {
    charArr = charArr + abcLowerArr
  }

  if (num) {
    charArr = charArr + numArr

  }

  if (special) {
    charArr = charArr + specialArr
  }
console.log(passLength);

  for (let i = 0; i < passLength; i++) {
    let random = Math.floor(Math.random() * charArr.length);
    password = password + charArr[random];

  }
  console.log(password);

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
