// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// function fib(n, count = 0, value = 0, prev = 0) {
//     if (count == n) {
//       return value;
//     }
//     if (value == 0) {
//       value = 1;
//     } else {
//       let temp = value;
//       value = value + prev;
//       prev = temp;
//     }
//     count++;
//     return fib(n, count, value, prev);
//   }

module.exports = fib;
