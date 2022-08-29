/** @param {string} name */
function getNumberOfChars(name) {
  return name.length;
  // return the number of characters in: name
}

/** @param {string} name */
function getLower(name) {
  return name.toLocaleLowerCase();
  // return name all in lower case (example: "ABC" becomes "abc")
}

/** @param {string} name */
function getUpper(name) {
  return name.toLocaleUpperCase(); // return name all in upper case (example: "abc" becomes "ABC")
}

/* Do not touch below this line  */

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
  answer1.textContent = getNumberOfChars(name.value);
  answer2.textContent = getLower(name.value);
  answer3.textContent = getUpper(name.value);
});
