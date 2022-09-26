'use strict';

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number[]} value
 */
 const PositiveTemperatures = temp=>temp.filter(temp=>temp>=0);


// Sample usage - do not modify
console.log(PositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(PositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]

