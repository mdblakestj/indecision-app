console.log('utils.js is running')

const square = (x) => x * x
//
// export {square};

const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

export {squre, add, subtract as default}
