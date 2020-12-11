const { curry } = require("ramda");

const add = (x, y) => x + y;

// Simple Curry Example
// const curry = (f) => (x) => (y) => f(x, y);

const curryAdd = curry(add);
const increment = curryAdd(1);
console.log(increment(5));

const modulo = curry((x, y) => y % x);
const isOdd = modulo(2); // (2,y)=> y % 2
console.log(isOdd(4));

const filter = curry((f, arr) => arr.filter(f));
const getOdds = filter(isOdd);
console.log(getOdds([1, 2, 3, 4, 5]));

const replace = curry((regex, replacement, str) =>
  str.replace(regex, replacement)
);
const replaceVowels = replace(/[AEIOU]/gi, "!");
console.log(replaceVowels('Hey I Have Words'))