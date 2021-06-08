"use strict";
exports.__esModule = true;
exports.name = exports.greeting = exports.intro = exports.info = exports.id = exports.address = exports.user = exports.nestedObject = exports.job = exports.person = exports.object = void 0;
// #1 Object Destructuring
exports.object = { name: 'elvis', title: 'hip swinger' };
// deconstruct here
exports.person = exports.object.name, exports.job = exports.object.title;
// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(exports.person); // 'elvis'
console.log(exports.job); // 'hip swinger'
// #2 Object Matching: Nested destructuring
exports.nestedObject = {
    user: 'elvis',
    address: {
        city: 'denver',
        state: 'colorado'
    },
    id: 1
};
// deconstruct here
exports.user = exports.nestedObject.user, exports.address = exports.nestedObject.address, exports.id = exports.nestedObject.id;
// expected results:
console.log(exports.user); // 'elvis'
console.log(exports.address); // { city: 'denver', state: 'colorado' }
console.log(exports.id); // 1
// #4 Create a new object given the destructed values above
// reconstruct here
exports.info = { user: 'elvis', address: { city: 'denver', state: 'colorado' }, id: 1 };
console.log(exports.info);
// #3 Object with key value pairs: construct a statement
exports.intro = { greeting: 'hello', name: 'taylor' };
exports.greeting = exports.intro.greeting, exports.name = exports.intro.name;
console.log(exports.greeting + ", " + exports.name + "!");
// construct statement here
// expected result: 'hello, taylor!'
