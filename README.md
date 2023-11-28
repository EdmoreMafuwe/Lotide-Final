
# Objective

This project was conceived and shared as part of my educational journey at Lighthouse Labs.

# How to Use
Install:

npm install @theo.mp/lotide

# Require:

javascript
# Copy code
const _ = require('@theo.mp/lotide');
Utilize:

javascript
# Copy code
const results = _.tail([1, 2, 3]); // => [2, 3]

# API Reference
The Lotide library provides a set of utility functions:

assertArraysEqual: Validates if two arrays are equal.

assertEqual: Validates if two primitive values are equal.

assertObjectEqual: Validates if two objects are equal.

countLetters: Generates an object with unique characters in a given string as keys and the corresponding occurrence counts as values.

countOnly: Takes an array and an object, returning counts of elements specified in the input object that are present in the array.

eqArrays: Compares the contents of two arrays for equality.

eqObjects: Compares the contents of two objects for equality.

findKey: Takes an object and a callback, returning the first key for which the callback returns a truthy value. Returns undefined if no key is found.

findKeyByValue: Takes an object and a value, returning the first key containing the given value. Returns undefined if no such key is found.

flatten: Given an array containing nested arrays, flattens it into a single-level array.

head: Returns the first item in an array.

letterPositions: Generates an object with characters as keys and corresponding indices in the string as values.

map: Returns a new array based on the results of a callback function.

middle: Returns an array with the middle element(s) of the provided array, one element for odd arrays, and two elements for even arrays.








* `tail`: Returns the "tail" of an array: everything except for the first item (head) of the provided array.

* `takeUntil`: Returns a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.

* `without`: Takes an array and an itemsToRemove array. It should return a new array with only the elements from source that are not present in the itemsToRemove array.
