// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables to include different characters in password
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["#","@","!","$","%","^","&","*","?","+","<",">"]
var number = [0,1,2,3,4,5,6,7,8,9]
var finalPassword = []


function generatePassword () {
  //password length questions 
var userChoice = prompt("How many characters would you like your password to have?")
if (userChoice <8) {
  alert("Your password must be at least 8 characters long.")
  return
}
else if (userChoice >=129) {
  alert("Your password must be less than 129 characters long.")
  return
}
//including uppercase letters in password
var yesToUpper = confirm("Click OK to confirm the use of uppercase letters in your password.")
if (yesToUpper) {
  finalPassword = finalPassword.concat(upper)
}

//including lowercase letters in password
var yesToLower = confirm("Click OK to confirm the use of lowercase letters in your password.")
if (yesToLower){
  finalPassword = finalPassword.concat(lower)

}

//including special characters in password
var yesToSpecial = confirm("Click OK to confirm the use of special characters in your password.")
if (yesToSpecial) {
  finalPassword = finalPassword.concat(special)
}

//including numbers in password
var yesToNumb = confirm("Click OK to confirm the use of numbers in your password.")
if (yesToNumb) {
  finalPassword = finalPassword.concat(number)
}

var uniquePassword = ""

//making the password provided random and the correct length
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
