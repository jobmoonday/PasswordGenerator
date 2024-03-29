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
  let password;
  let rawPasswordArr = [];
  let specialCharPrompt = 0;
  let numericCharPrompt = 0;
  let lowerCharPrompt = 0;
  let upperCharPrompt = 0;
  let passwordLenght = 0;
    
  // Function to prompt user for password options
  function getPasswordOptions() {
  
    lowerCharPrompt = parseInt(prompt("How many lower characters would you like in your password? Please enter a number")) 
    upperCharPrompt = parseInt(prompt("How many UPPER characters would you like in your password? Please enter a number"))
    specialCharPrompt = parseInt(prompt("How many special characters ($,%,£, etc) would you like in your password? Please enter a number"))
    numericCharPrompt = parseInt(prompt("How many numerical characters (0...9) would you like in your password? Please enter a number"))
      
    passwordLenght = specialCharPrompt+numericCharPrompt+lowerCharPrompt+upperCharPrompt;
    
  
    if((passwordLenght)>128 || (passwordLenght < 8)){
      alert("Your password must 8 - 128 characters long. Please try again")
      getPasswordOptions()
    }
  
    alert("Click \"Generate Password\" button now")
  }
  
  getPasswordOptions();
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const item = arr[random];
    return item;
  
  }
  
  // Function to generate password with user input
  function generatePassword() {
  
    for(i=0; i<specialCharPrompt;i++){
        rawPasswordArr.push(getRandom(specialCharacters))
    }
    for(i=0; i<numericCharPrompt;i++){    
        rawPasswordArr.push(getRandom(numericCharacters));  
    }
    for(i=0; i<lowerCharPrompt;i++){
        rawPasswordArr.push(getRandom(lowerCasedCharacters)); 
    } 
    for(i=0; i<upperCharPrompt;i++){
        rawPasswordArr.push(getRandom(upperCasedCharacters));
    }
    rawPasswordArr.sort(() => Math.random() - 0.5)
    password = rawPasswordArr.join("");
    
    return password;
  }
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);