// #1 Variable swapping

export const fruits = ['apple', 'banana']
export var [a , b] = fruits;

// Currently, I wou11ld get the following:
console.log(a); // 'apple'
console.log(b); // 'banana'
// deconstruct here
[a, b]= [b, a];


/// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';


// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
export var[ , ,...others]=food;
[b, a]=[a, b];

// deconstruct here

// expected result:
console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
export const intro=['hello', 'taylor'];
export const [x, y]=intro;
console.log(intro+"!")

// construct statement here

// expected result: 'hello, taylor!'

