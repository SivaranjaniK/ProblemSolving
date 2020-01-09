// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let column = 2 * n - 1;
  let mid = Math.floor((2 * n - 1) / 2);
  for (let i = 0; i < n; i++) {
    //let spaces = Math.floor(column - 2 * i + 1);
    let row = "";
    for (let j = 0; j < column; j++) {
      if (mid - i <= row.length && mid + i >= row.length) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row);
    // for (let j = 0; j < spaces / 2; j++) {
    //   row += " ";
    // }
    // for (let j = 0; j < column - spaces; j++) {
    //   row += "#";
    // }
    // for (let j = 0; j < spaces / 2; j++) {
    //   row += " ";
    // }
    // //console.log(row);
  }
}

const printRows = () => {};

module.exports = pyramid;
