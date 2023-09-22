// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["#","@","!","$","%","^","&","*","?","+","<",">"]
var number = [0,1,2,3,4,5,6,7,8,9]
var finalPassword = []

function generatePassword () {
var userChoice = prompt("How many characters would you like your password to have?")
if (userChoice <8) {
  alert("Your password must be at least 8 characters long.")
  return
}
else if (userChoice >=129) {
  alert("Your password must be less than 129 characters long.")
  return
}

var yesToUpper = confirm("Click OK to confirm the use of uppercase letters in your password.")
if (yesToUpper) {
  finalPassword = finalPassword.concat(upper)
  // for (var i = 0; i < userChoice; i++) {
  //   console.log(yesToUpper[Math.floor(Math.random() * upper.length)])
  //   }
}

var yesToLower = confirm("Click OK to confirm the use of lowercase letters in your password.")
if (yesToLower){
  finalPassword = finalPassword.concat(lower)
  // for (var i = 0; i < userChoice; i++) {
  //   console.log(yesToLower[Math.floor(Math.random() * lower.length)])
  //   }
}

var yesToSpecial = confirm("Click OK to confirm the use of special characters in your password.")
if (yesToSpecial) {
  finalPassword = finalPassword.concat(special)
  // for (var i = 0; i < userChoice; i++) {
  //   console.log(yesToSpecial[Math.floor(Math.random() * special.length)])
  //   }
}

var yesToNumb = confirm("Click OK to confirm the use of numbers in your password.")
if (yesToNumb) {
  finalPassword = finalPassword.concat(yesToNumb)
  // for (var i = 0; i < userChoice; i++) {
  //   console.log(yesToNumb[Math.floor(Math.random() * number.length)])
  //   }
}
var uniquePassword = ""

for (var i = 0; i < userChoice; i++) {
   console.log(finalPassword[Math.floor(Math.random() * finalPassword.length)])
   uniquePassword+= finalPassword[Math.floor(Math.random() * finalPassword.length)]
   }



return uniquePassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
