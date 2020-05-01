// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (clicking button runs variable)
generateBtn.addEventListener("click", writePassword);


var specials = ["!", "@", "#", "$", "%", "^", "&", "*"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var passwordLength = parseInt(prompt("Length?")); // make it 8-128
var wantsSpecials = confirm("Do you want special characters?");
var wantsUppers = confirm("Do you want uppercase characters?");
var wantsLowers = confirm("Do you want lowercase characters?");
var wantsNumbers = confirm("Do you want numbers?"); 

var possibles = [];

if (wantsSpecials) {
  possibles.push(specials);
}

if (wantsLowers) {
  possibles.push(lowercase);
}

if (wantsUppers) {
  possibles.push(uppercase);
}

if (wantsNumbers) {
  possibles.push(numbers);
}


var result = "";

for (var i = 0; i < passwordLength; i++) {
  // randomly pick an array from possibles
  var randomizer = possibles[Math.floor(Math.random() * possibles.length)];
  // randomly pick a character from the array we picked above
  var randomCharacter = randomizer[Math.floor(Math.random() * randomizer.length)];
  // add the character to the password
  result += randomCharacter;


}


alert(result); //maybe change to show up in password box