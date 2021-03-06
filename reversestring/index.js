// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedStr = new Array(str.length);
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    reversedStr[i] = str[j];
  }
  return reversedStr.join("");

  //   let reversedStr = "";
  //   for (let i = 0; i < str.length; i++) {
  //     reversedStr = str[i] + reversedStr;
  //   }
  //   return reversedStr;
}

module.exports = reverse;
