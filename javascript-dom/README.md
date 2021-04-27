# Intro to JavaScript & DOM Manipulation

### 1. Write a function in at least two different ways.
function hello() {
    console.log('im a function');
}

const hello = function() {
    console.log('im a function');
}

const hello = () => console.log('im a function');


### 2. What are the two ways of creating an object? Show below.
const object = {};

const object = new Object();

### 3. What does it mean to destructively change an array?
you change the original array. Doesn't return a new array


### 4. Name a few destructive array methods and what they do.
.pop() : deletes from the end of the array
.push() : adds to end of the array
.shift() : delete from the beginning of the array
.unshift() : add to beginning of the array


### 5. What does `.map` do? what does `.map` return?
makes changes to array and creates a new array from the values. 


### 6. What is the difference between `.map` and `.forEach`?
map has a return array and forEach doesn't return anything


### 7. What is a node?
an object provided by the dom. like an element with properties 

### 8. What is the virtual DOM?
representation of the source HTML


### 9. What does `.querySelector` return?
the first selection of an element matching the querySelector. Returns the node


### 10. What does `.getElementsByClassName` return?
return all nodes with the class name you are searching for. Node list


### 11. What is the difference between `.innerHTML` and `.textContent`?
.innerHTML grabs all inner html elements and the string
.textContent only grabs the string within the designated area.


### Continue in `index.js` . Open the html file by typing `open index.html` in your terminal after you `cd` into the `javascript-dom` folder. Note that `index.js` is not connected to your html file. Connect them and begin.

