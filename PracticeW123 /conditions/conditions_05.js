"use strict";

/**
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works
(e.g. "The greater number of 5 and 10 is 10.").


/**
 * @param {numbers} 
 */

function greaterNum(num1, num2) {
  if (num1 > num2) {
    console.log("the greater number is num1 i.e.", num1);
  } else {
    console.log("the greater number is num2 i.e.", num2);
  }
}

console.log(greaterNum(10, 5));
