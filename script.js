// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var size = prompt("Please enter a number between 8 to 128 for your password characters.")
  console.log(size)
}

if (size >= 8 && size <= 128) {
  var isLower = confirm ("Include lowercase characters?")
  console.log(isLower)

  var isUpper = confirm ("Include uppercase characters?")
  console.log(isUpper)

  var isNumber = confirm ("Include numbers?")
  console.log(isNumber)

  var isSpecial = confirm ("Include special characters?")
  console.log(isSpecial)
}

else {
  alert("Invalid Entry")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
