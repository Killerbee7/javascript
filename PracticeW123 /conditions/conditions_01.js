/* "use strict";
/**
Implement the function canVote such that it returns true whenever the age 18 or above
and false in all other scenarios.

 * @param {number} age
 */

// Sample usage - do not modify

function canVote(age) {
  /* let age = 19; */

  if (age >= 18) {
    console.log("Congratulation you are eligible to cast a vote");
  } else {
    console.log("Sorry, you are not eligible to cast a vote");
  }
}

canVote(19);
