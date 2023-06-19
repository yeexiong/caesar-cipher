exports.caesarCipher = function(str, shift) {
  var chars = str.split(''); // Split the string into an array of characters
  var uppercaseStart = 'A'.charCodeAt(0); // Get the character code for 'A'
  var lowercaseStart = 'a'.charCodeAt(0); // Get the character code for 'a'

  for (var i = 0; i < chars.length; i++) {
    var char = chars[i]; // Get the current character
    var code = char.charCodeAt(0); // Get the character code of the current character

    if (isAlphabetic(char)) { // Check if the character is alphabetic
      var isUpperCase = isUpperCaseLetter(code); // Check if the character is uppercase

      code = (code - (isUpperCase ? uppercaseStart : lowercaseStart) + shift) % 26; // Apply the Caesar cipher shift to the character code
      if (code < 0) { // Handle wrapping around the alphabet
        code += 26;
      }

      char = String.fromCharCode(code + (isUpperCase ? uppercaseStart : lowercaseStart)); // Convert the modified character code back to a character
    }

    chars[i] = char; // Update the character in the array
  }

  return chars.join(''); // Convert the array back to a string and return it
};

function isAlphabetic(char) {
  var code = char.charCodeAt(0); // Get the character code
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122); // Check if the character is within the range of uppercase or lowercase letters
}

function isUpperCaseLetter(code) {
  return code >= 65 && code <= 90; // Check if the character code corresponds to an uppercase letter
}