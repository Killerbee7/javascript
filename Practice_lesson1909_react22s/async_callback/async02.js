'use strict';

/**
Update the delayedWelcome function such that it delays the console.log
call 1 second into the future.*/

/**
 * @param {string} name
 */
 const delayedWelcome = name => {
        setTimeout(() => {
                console.log("Hello World! Delayed");
            }, 2000);
            
        }
// Sample usage - do not modify
console.log(delayedWelcome("Sam"));
console.log(delayedWelcome("Alex"));
