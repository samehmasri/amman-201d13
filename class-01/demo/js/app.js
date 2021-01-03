'use strict';

var userName = prompt('What is your name?');
console.log('userName value', userName);

var favManufacturer = prompt('What is your favorite car manufacturer?');
console.log('favManufacturer', favManufacturer);

var carModel = prompt('What is your favorite car model?');
console.log('carModel', carModel);

alert('Hello '+userName+' , you like cars manufactured by '+ favManufacturer + ' specially '+ carModel);
