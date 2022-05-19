// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number = "0123456789".split("");
var special = "!@#$%^&*()_+~".split("");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalPass = ""
  var size = prompt("Please enter a number between 8 to 128 for your password characters.")
  console.log(size)


  if (size >= 8 && size <= 128) {
    var isLower = confirm("Include lowercase characters?");
    console.log(isLower);

    var isUpper = confirm("Include uppercase characters?");
    console.log(isUpper);

    var isNumber = confirm("Include numbers?");
    console.log(isNumber);

    var isSpecial = confirm("Include special characters?");
    console.log(isSpecial);

    for (var i = 0; i < size; i++) {

      if (isLower === true) {
        // for (var i = 0; i <= size; i++);
        var positionString = Math.floor(Math.random() * lowercase.length)
        console.log(positionString)
        finalPass = finalPass + lowercase[positionString]
      }

      if (isUpper === true) {
        // for (var i = 0; i <= size; i++);
        var positionString = Math.floor(Math.random() * uppercase.length)
        console.log(positionString)
        finalPass = finalPass + uppercase[positionString]
      }

      if (isNumber === true) {
        // for (var i = 0; i <= size; i++);
        var positionString = Math.floor(Math.random() * number.length)
        console.log(positionString)
        finalPass = finalPass + number[positionString]
      }

      if (isSpecial === true) {
        // for (var i = 0; i <= size; i++);
        var positionString = Math.floor(Math.random() * special.length)
        console.log(positionString)
        finalPass = finalPass + special[positionString]
      }

  else {
        alert("Invalid Entry")
      }

    return finalPass

    }
  }

}


// need to add a four loop iteration in here //

