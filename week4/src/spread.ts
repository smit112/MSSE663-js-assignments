// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

//export const originalNumbers = numbers.map(number => number);


// refactor here
export const originalNumbers =[...numbers];
console.log(originalNumbers);

// #2 Combining arrays
export const winners = ['first'];
//export const runnerUps = ['second', 'third', 'fourth', 'fifth'];


// refactor here
export const runnerUps = [...winners,'second', 'third', 'fourth', 'fifth'];

console.log(runnerUps);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

//export const originalPersons = Object.assign(bob, kyle);

// refactor here
export const originalPersons=({...bob, ...kyle});
console.log(originalPersons);



// #4 Modifying values in arrays of objects
export const data = [
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

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

/*export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return (task);

});*/

// refactor here
export const originalUpdates={...update}

console.log(originalUpdates);