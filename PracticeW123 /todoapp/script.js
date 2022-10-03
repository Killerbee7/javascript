// write to-do app
// grab dom elements and store in JS variables
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
// using ternary
let itemsArray = localStorage.getItem('items')
 ? JSON.parse(localStorage.getItem('items'))
 : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
// list of items and append to html
const liMaker = (text) => {
 const li = document.createElement('li');
 li.textContent = text;
 ul.appendChild(li);
};
// add event listener for the form, submit
form.addEventListener('submit', function (e) {
 e.preventDefault();
 if(input.value) {
 itemsArray.push(input.value);
 localStorage.setItem('items', JSON.stringify(itemsArray));
 liMaker(input.value);
 input.value = '' }
 else{
    alert("empty");
   
 }
});
// iterate over data
data.forEach((item) => {
 liMaker(item);
});
// event listener for click button
button.addEventListener('click', function () {
 localStorage.clear(); // clear local storage
 while (ul.firstChild) {
 ul.removeChild(ul.firstChild);
 }
 itemsArray = [];
});