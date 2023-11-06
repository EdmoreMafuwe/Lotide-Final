// Import assertArraysEqual and eqArrays functions from your lotide library

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Example usage of map function:

const words = ["ground", "control", "to", "major", "tom"];

// Test case 1: Mapping words to their lengths
const results1 = map(words, word => word.length);
assertArraysEqual(results1, [6, 7, 2, 5, 3]);

// Test case 2: Mapping words to their uppercase versions
const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test case 3: Mapping words to their first characters
const results3 = map(words, word => word[0]);
assertArraysEqual(results3, ["g", "c", "t", "m", "t"]);
