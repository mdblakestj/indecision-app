// import './utils.js';
// import {square} from './utils.js'
//
// console.log('app.js is running!!')
//
// console.log(square(4));

//Person.js
// named export isAdult(18)- true if adult otherwise false
//named export canDrink(18) - true if 21 and over otherwise false
//inport isAdult and canDrink printing both to console

import {isAdult, canDrink} from './person.js'

if (isAdult(18)) {
  console.log("You are an adult")
} else {
  console.log("You are not an adult")
}

if (canDrink(18)) {
  console.log("You can drink")
} else {
  console.log("You can't drink")
}
