/**
 * Module System
 *
 * 1. core libararies - fs, http, path
 * 2. modules - create a module
 * 3. NPM - Model Package Manager (YARN)
 */

const hello = (name) => {
  return `Hello, ${name}, welcome to NodeJS`;
};

const greeting = (name) => {
  return `hello ${name}`
}

// let a = 10;

// console.log(hello('John'));
module.exports = {
  hello,
  // a,
  greeting,
};
