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


// Function to prompt user for password options
function getPasswordOptions() {
  let charNumbers = [];
  charNumbers = prompt("How long do you want your password? Choose between 10 and 64 :)")
  if (charNumbers < 10 || charNumbers > 64) {
    alert("Between 10 and 64 please")
  };
  let lowerCase = confirm("Would you like to have lower case characters in your password?")
  if (lowerCase === true) {
    let agreedCharacters = agreedCharacters.concat(lowerCase)
  }
  let upperCase = confirm("Would you like to have upper case characters in your password? ")
  if (upperCase === true) {
    let agreedCharacters = agreedCharacters.concat(upperCase)
  }
  let numbers = confirm("Would you like to have numbers in your password? ")
  if (numbers === true) {
    let agreedCharacters = agreedCharacters.concat(numbers)
  }
  let special = confirm("Would you like to have special characters in your password? ")
  if (special === true) {
    let agreedCharacters = agreedCharacters.concat(special)
  }
}
// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);