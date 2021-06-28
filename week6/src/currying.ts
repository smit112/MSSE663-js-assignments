//import { sum } from "lodash";
// #1 Convert this javascript function to a curried function
//function curryMe(string1: string, string2: string, string3: string){
  //return (string1 + ' ' + string2 + ' ' + string3);
//};



// source code here
function curryMe(string1: string){
  return (string2: string) => {
    return (string3: string) => {
      return  (string1 + ' ' + string2 + ' ' + string3);
    }
  }
}
console.log(curryMe("M")("Having")("Curry"))

 



// #2 Hoist and convert nested functions to curried functions
 //function doMath(a:any) {
  //return function add(b: any) {
    //return function subtract(c: number) {
      //return doMath(a + b - c);
    //};
  //};
 //}

//source code here
console.log(doMath(2)(1)(1));
 function doMath(a: any){
  return (b: any) => {
    return  (c:any) => {
      return (a + b - c);
    }
  }
 }


// #3 Write a curried function that returns an array containing the ninjas who have a black belt


 const ninjasOne = [
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
]


const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
]



// source code here


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
