// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let stringArray = [...str];
  stringArray[0] = stringArray[0].toUpperCase();
  for (let i = 0; i < stringArray.length - 1; i++) {
    if (stringArray[i] == " ") {
      stringArray[i + 1] = stringArray[i + 1].toUpperCase();
    }
  }
  return stringArray.join("");
}

module.exports = capitalize;
