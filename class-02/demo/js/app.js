'use strict';
// var test = confirm('Do you like Javascript?');
// console.log(test);

// if(test){
//   alert('Then you should be enjoying this course');
// } else {
//   alert('Poor you');
// }


// logical operator example
// var myBool = true;
// var anotherBool = false;
// var thirdBool = true;

// And = both conditions have to be true
// if (myBool && thirdBool) {
//   console.log('myBool and thirdBool were both true');
// } // only one of these have to be true
// else if (myBool || anotherBool) {
//   console.log('My bool or anotherBool was true!');
// } // only thirdBool can be true
// else if (thirdBool) {
//   console.log('myBool and anotherBool were false, but thirdBool was true.');
// } // none of the above conditions were true
// else {
//   console.log('Were any of my variables true?');
// }

var favColor = 'black';
var color = prompt('can you guess my favorite color?');

if(color.toLowerCase() === favColor){
  alert('correct! black is my favorite color!');
} else {
  alert('Oops! no '+ color + ' is not my favorite' );
}


console.log(color.toLowerCase());
