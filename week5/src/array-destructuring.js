"use strict";
// #1 Variable swapping
var _a, _b;
exports.__esModule = true;
exports.y = exports.x = exports.intro = exports.others = exports.food = exports.b = exports.a = exports.fruits = void 0;
exports.fruits = ['apple', 'banana'];
exports.a = exports.fruits[0], exports.b = exports.fruits[1];
// Currently, I wou11ld get the following:
console.log(exports.a); // 'apple'
console.log(exports.b); // 'banana'
// deconstruct here
_a = [exports.b, exports.a], exports.a = _a[0], exports.b = _a[1];
/// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(exports.a); // 'banana';
console.log(exports.b); // 'apple';
// #2 Variables and Rest
exports.food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
exports.others = exports.food.slice(2);
_b = [exports.a, exports.b], exports.b = _b[0], exports.a = _b[1];
// deconstruct here
// expected result:
console.log(exports.a); // 'apple'
console.log(exports.b); // 'banana'
console.log(exports.others); // ['chocolate, 'pears', 'oats', 'pizza']
// #3 Array: Contruct a statement
exports.intro = ['hello', 'taylor'];
exports.x = exports.intro[0], exports.y = exports.intro[1];
console.log(exports.intro + "!");
// construct statement here
// expected result: 'hello, taylor!'
