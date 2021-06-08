"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.originalUpdates = exports.update = exports.data = exports.originalPersons = exports.kyle = exports.bob = exports.runnerUps = exports.winners = exports.originalNumbers = exports.numbers = void 0;
// #1 Array copying
exports.numbers = [1, 2, 3, 4, 5];
//export const originalNumbers = numbers.map(number => number);
// refactor here
exports.originalNumbers = __spreadArray([], exports.numbers);
console.log(exports.originalNumbers);
// #2 Combining arrays
exports.winners = ['first'];
//export const runnerUps = ['second', 'third', 'fourth', 'fifth'];
// refactor here
exports.runnerUps = __spreadArray(__spreadArray([], exports.winners), ['second', 'third', 'fourth', 'fifth']);
console.log(exports.runnerUps);
// #3 Combining objects
exports.bob = {
    man: 'Bob'
};
exports.kyle = {
    boy: 'Kyle'
};
//export const originalPersons = Object.assign(bob, kyle);
// refactor here
exports.originalPersons = (__assign(__assign({}, exports.bob), exports.kyle));
console.log(exports.originalPersons);
// #4 Modifying values in arrays of objects
exports.data = [
    {
        id: 0,
        task: 'Do the thing'
    },
    {
        id: 1,
        task: 'Do the other thing'
    },
    {
        id: 2,
        task: 'Do the last thing'
    }
];
exports.update = {
    id: 1,
    task: 'Do the other thing... again'
};
exports.originalUpdates = exports.data.map(function (task) {
    if (task.id == exports.update.id) {
        return Object.assign(task, exports.update);
    }
    return (task);
});
// refactor here
console.log(exports.originalUpdates);
