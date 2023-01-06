// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



let agreedCharacters = [];
let charNumbers = [];


// Function to prompt user for password options
function passwordOptions() {
  charNumbers = prompt("How long do you want your password? Choose between 10 and 64 :)")
  if (charNumbers < 10 || charNumbers > 64) {
    alert("Between 10 and 64 please")
    return
  };
  let lowerCase = confirm("Would you like to have lower case characters in your password?")
  let upperCase = confirm("Would you like to have upper case characters in your password? ")
  let numbers = confirm("Would you like to have numbers in your password? ")
  let special = confirm("Would you like to have special characters in your password? ")
  if (lowerCase === true) {
    agreedCharacters = agreedCharacters.concat(lowerCasedCharacters)
  }
  if (upperCase === true) {
    agreedCharacters = agreedCharacters.concat(upperCasedCharacters)
  }
  if (numbers === true) {
    agreedCharacters = agreedCharacters.concat(numericCharacters)
  }
  if (special === true) {
    agreedCharacters = agreedCharacters.concat(specialCharacters)
    return agreedCharacters  
  }
  if ( lowerCase === false && upperCase === false && numbers === false && special === false) {
    alert("You need to choose at least one type of characters")
    return
  }
}
// Function for getting a random element from an array
let randomDigits = [];
function getRandom() {
  let randomDigits = agreedCharacters[Math.floor(Math.random() * charNumbers)] 
  return randomDigits
}
getRandom()
console.log(randomDigits)

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', passwordOptions);