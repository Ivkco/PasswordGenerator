// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {


  var minLength = 8
  var maxLength = 128
  

  var characters = {
    upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    numbers: ['0','1','2','3','4','5','6','7','8','9'],
    symbols: ['@','%','+','/','!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'],
    characterArray:[]
  }

  var userInput = parseInt(prompt("Please choose a password length between a min 8 and max of 128 characters"));
  while (minLength > userInput || maxLength < userInput) {
    alert("Your password has " + userInput + " total characters");
    userInput = parseInt(prompt("Please choose a password length between a min 8 and max of 128 characters"))
  } 

  if (confirm("Would you like to use lowercase letters?")) {
    characters.characterArray = characters.characterArray.concat (characters.lowerCase);
  }
  if (confirm("Would you like to use upper case letters?")) {
    characters.characterArray = characters.characterArray.concat (characters.upperCase);
  }
  if (confirm("Would you like to use numbers?")) {
    characters.characterArray = characters.characterArray.concat (characters.numbers);
  }
  if (confirm("Would you like to use symbols?")) {
    characters.characterArray = characters.characterArray.concat (characters.symbols);
  }
  if (characters.characterArray.length < 1) {
    alert("Nothing has been selected, please choose at least one set of characters")
    return null;
  }
  
  var generatedPassword = "";
  for (i=0; i<userInput; i++) {
    index = Math.floor(Math.random() * characters.characterArray.length);
    generatedPassword += characters.characterArray[index];
  }
  alert("Your Password is " + generatedPassword)
  
  
  return generatedPassword;
}



