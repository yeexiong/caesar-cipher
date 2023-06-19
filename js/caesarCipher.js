exports.caesarCipher = function(str, shift) {
  var chars = str.split('');
  var uppercaseStart = 'A'.charCodeAt(0);
  var lowercaseStart = 'a'.charCodeAt(0);

  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    var code = char.charCodeAt(0);

    if (isAlphabetic(char)) {
      var isUpperCase = isUpperCaseLetter(code);

      code = (code - (isUpperCase ? uppercaseStart : lowercaseStart) + shift) % 26;
      if (code < 0) {
        code += 26;
      }

      char = String.fromCharCode(code + (isUpperCase ? uppercaseStart : lowercaseStart));
    }

    chars[i] = char;
  }

  return chars.join('');
};

function isAlphabetic(char) {
  var code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isUpperCaseLetter(code) {
  return code >= 65 && code <= 90;
}