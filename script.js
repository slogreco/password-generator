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
  let symArr = "!@#$%^&*()_+-=[]\{}|;:,./<>`~";
  

  // Password is currently blank! We need to make a better one
  let password = "";
  let allChars = [];
  let passLength = 0;

  passLength = prompt("How many character would you like your password (8-128)");

  if (passLength < 8 || passLength > 128) {
    alert("Password can only be a whole number between 8 and 128");
  }

  for (let i = 0; i < length, i++;) {
    let random = math.floor(math.random().length);
    password = allChars[random];
  return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
