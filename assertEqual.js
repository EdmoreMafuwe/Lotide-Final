
// assertArraysEqual.js

const eqArrays = require('./eqArrays'); // Import the eqArrays function

const assertArraysEqual = function(arr1, arr2) {
  const equal = eqArrays(arr1, arr2);
  if (equal) {
    console.log("✅ Assertion passed: Arrays are equal.");
  } else {
    console.log("❌ Assertion failed: Arrays are not equal.");
  }
};

module.exports = assertArraysEqual;