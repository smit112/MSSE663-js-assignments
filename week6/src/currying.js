"use strict";
// #1 Convert this javascript function to a curried function
/*function curryMe(string1: string, string2: string, string3: string){
  return (string1 + ' ' + string2 + ' ' + string3);
}

// source code here
console.log(curryMe((String)(String)(String));*/
exports.__esModule = true;
var lodash_1 = require("lodash");
// #2 Hoist and convert nested functions to curried functions
function doMath(a) {
    return function add(b) {
        return function subtract(c) {
            return doMath(a + b - c);
        };
    };
}
//source code here
//function sum(a:any, b:any, c:number){
//return a + b- c;
//};
var curriedSum = doMath(lodash_1.sum);
console.log(curriedSum(1)(2)(1));
// #3 Write a curried function that returns an array containing the ninjas who have a black belt
var ninjasOne = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Leonardo', belt: 'black' },
    { name: 'Mr. Miyagi', belt: 'black' },
    { name: 'Rocky', belt: 'black' },
    { name: 'Colt', belt: 'green' },
    { name: 'Tum Tum', belt: 'white' },
    { name: 'Haru', belt: 'white' },
    { name: 'The Bride', belt: 'black' },
    { name: 'Cammy', belt: 'black' },
    { name: 'Wong Fei-hung', belt: 'green' }
];
var ninjasTwo = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black' }
];
// source code here
function ninjas(name, belt) {
    if (belt == 'black') {
        return name;
    }
    return ninjas;
}
console.log(ninjas);
/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */
/*const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};



// source code here
*/ 
