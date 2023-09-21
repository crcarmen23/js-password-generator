// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["#","@","!","$","%","^","&","*","?","+","<",">"]
var number = [0,1,2,3,4,5,6,7,8,9]

function generatePassword () {
var userChoice = prompt("How many characters would you like your password to have?")
if (userChoice <8) {
  prompt("Your password must be at least 8 characters long.")
}
else if (userChoice >=129) {
  prompt("Your password must be less than 129 characters long.")
}
confirm("Click OK to confirm the use of uppercase letters in your password.")

confirm("Click OK to confirm the use of lowercase letters in your password.")

confirm("Click OK to confirm the use of special characters in your password.")

confirm("Click OK to confirm the use of numbers in your password.")

return "string"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
