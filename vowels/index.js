// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //return str.match(/[aeiou]/gi) == null ? 0 : str.match(/[aeiou]/gi).length;
  let count = 0;
  let matcher = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (matcher.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
