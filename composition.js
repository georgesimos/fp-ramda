const { compose } = require("ramda");

// const compose = (f, g) => (x) => f(g(x));

const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => str + "!";
const first = (str) => str[0];

const loudFirst = compose(toUpper, first);
const shout = compose(exclaim, loudFirst);
console.log(shout("george"));
