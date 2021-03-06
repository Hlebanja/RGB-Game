//Coding exercise - practicing loops over objects
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//This is how to easily work with arrays including element indexes
// for (const [i, x] of game.scored.entries()) {
//   console.log(i + ' ' + x);
// }

// 1.
// game.scored.forEach((player, i) => console.log(`${player} score ${i}`));

// 2.
// let sum = 0;
// for (const [key, value] of Object.entries(game.odds)) {
//   //this is how you iterate through elements of an object
//   sum += value;
// }
// console.log(sum / Object.entries(game.odds).length);

// // 2. alternative
// const average = Object.entries(game.odds).reduce(
//   (acc, entrie, i, arr) => (acc += entrie[1] / arr.length),
//   0
// );
// console.log(average);

// Challenge;

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

//Cool counting entities on an array algorithm
// var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

// function foo(arr) {
//   var a = [],
//     b = [],
//     prev;

//   arr.sort();
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] !== prev) {
//       a.push(arr[i]);
//       b.push(1);
//     } else {
//       b[b.length - 1]++;
//     }
//     prev = arr[i];
//   }
//   return [a, b];
// }

// var result = foo(arr);
// console.log('[' + result[0] + ']', '[' + result[1] + ']');

/*
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

//removing duplicates
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//deleting specific element of bidimensional array
// uniqueArr.splice(
//   uniqueArr.findIndex(element => element[0] === 64),
//   1
// );
// console.log(uniqueArr);

// for (let [index, key] of uniqueArr.entries()) {
// console.log(index + ' ' + key);
// }

//Map to array
// let events = [...gameEvents];
// console.log(events);

//Object to array
// const car = {
//   name: 'Pajero',
//   brand: 'volkswagen',
// };
// console.log(Object.entries(car));

// var carArr = ['gol', 'pajero', 'carrera', 'polo'];

// //way of easily getting the index out of an array
// for (const [index, element] of carArr.entries())
//   console.log(index + ' ' + element);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// let test = new Car('Volkswagen', 100);

// console.log(test.make + ' ' + test.speed);

// test.accelerate();

// console.log(test.make + ' ' + test.speed);

//create a class Car

// class Car {
//   constructor(make, speed, name) {
//     this.make = make;
//     this.speed = speed;
//     this.name = name;
//   }

//   get fullDescription() {
//     return `the car ${this.name} is manufactured by ${this.make}`;
//   }

//   set carName(name) {
//     this.name = name;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }

//   accelerate() {
//     this.speed += 10;
//   }
//   break() {
//     this.break -= 10;
//   }
// }

// const polo = new Car('Volkswagen', 140, 'polo');
// console.log(polo);

// polo.carName = 'john';
// console.log(polo); //name = john

// console.log('****Speed in miles is****');
// console.log(polo.speedUS); // 140 / 1.6

// polo.speedUS = 125;
// console.log('****New speed set****');
// console.log(polo); // 125 * 1.6

// function diamond(n) {
//   if (n % 2 == 0 || n <= 0) return null;
//   let answerStr = '';
//   for (let i = 1; i <= n; i += 2) {
//     answerStr += `${' '.repeat((n - i) / 2) + '*'.repeat(i)}\n`;
//   }
//   for (let i = n - 2; i >= 1; i -= 2) {
//     answerStr += `${' '.repeat((n - i) / 2) + '*'.repeat(i)}\n`;
//   }
//   return answerStr;
// }

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', (line) => {
//     var nums = line.split(' ');
//     var firstDice = parseInt(nums[0]);
//     var secondDice = parseInt(nums[1]);
//     /*Solve the test case and output the answer*/
// });

//create new array

//n2 complexity

////////////////////////////Exercise 1

// const readline = require('readline');

// function calculatePossibleRolls(firstDice, secondDice) {
//   let rollsArr = [];
//   for (let i = 1; i <= firstDice; i++) {
//     for (let j = 1; j <= secondDice; j++) {
//       rollsArr.push(i + j);
//     }
//   }
//   return rollsArr; //array with the sums of all different combinations of rolls (for the two dice provided).
// }

// function occurrencesCounter(arr) {
//   //given any input array, this function calculates the number of occurrences of each element.
//   let elementsSet = [], //contain (unique) set of elements.
//     occurrences = [], //contain, respectively, occurrences count of each element of the set.
//     prev;

//   let sortedArr = arr.slice().sort(); //slice().sort() as not to mutate original array.
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] !== prev) {
//       elementsSet.push(sortedArr[i]);
//       occurrences.push(1);
//     } else {
//       occurrences[occurrences.length - 1]++;
//     }
//     prev = sortedArr[i];
//   }
//   return [elementsSet, occurrences];
// }

// function findMaxOccurrences(arr) {
//   let max = 0; //safe to initialize as 0, considering dice rolls are always > 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// function createResultOutput(resultArrays, max) {
//   //resultArrays[0] contain the possible rolls
//   //resultArrays[1] contain the rolls occurrences count
//   let result = [];
//   for (let i = 0; i < resultArrays[1].length; i++) {
//     if (resultArrays[1][i] === max) {
//       result.push(resultArrays[0][i]);
//     }
//   }
//   result.sort((a, b) => a - b); //ascending order
//   return result;
// }

// function printResults(arr) {
//   arr.forEach(element => console.log(element));
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', line => {
//   var nums = line.split(' ');
//   var firstDice = parseInt(nums[0]);
//   var secondDice = parseInt(nums[1]);

//   const rollsArr = calculatePossibleRolls(firstDice, secondDice);
//   const resultArrays = occurrencesCounter(rollsArr);

//   //To test what the resultArrays is. This comment can be deleted at any time.
//   //console.log('[' + resultArrays[0] + ']', '[' + resultArrays[1] + ']');

//   const max = findMaxOccurrences(resultArrays[1]);
//   const result = createResultOutput(resultArrays, max);
//   printResults(result);
// });

//A possible solution extension - and I am unsure if this would be of any benefit:

//If you had to calculate the most probable dice roll for, say, 1000 dice rolls per second
//an extension of this solution can be proposed.

//create a map() collection with all combinations of faced dices between 4 and 20 as keys.
//for each combination of dices, the most probable roll result would be calculated and stored as values.
//Keys: arrays with 2 elements, each element the dices' number of faces.
//Values: array with the result (most probable rolls in ascending order) of those two specific dices.

//It would require a lot of calculation once,
//but once you had the map object with all possible combinations and results,
//for new rolls it would require *less processing* to query the result in the map object
//then to calculate individually the whole process for each user input.

//Then, to search for the result of 2 dices it would be a simple search on the object.
//This would simly avoid having to perform all calculations in the process repeatedly.
//Downside is that it would have a worse space-complexity as it'd require memory to store the map object created.

//Time complexity of the two solutions seem to be the same.

////////////////////////////Exercise 2

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Example input for testing purposes, used on the early stages of this code. To be deleted.
// let exampleInput =
//   '3\nSET 0\nCLEAR 1\nAND 2 2\n6\nSET 31\nSET 30\nCLEAR 29\nAND 29 30\nOR 29 30\nAND 30 28\n0';
// let inputArr = exampleInput.split('\n');

function inputToSequences(inputArr) {
  //breaks inputArr into sub arrays, each containing a instruction sequence
  //store the instruction sequences into sequencesArr
  let sequencesArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    let sequenceStart = Number(inputArr[i]);
    if (sequenceStart === 0) break;

    if (isNaN(Number(sequenceStart))) {
      //do nothing
    } else {
      //beginning of a new sequence
      let sequence = [];

      //add all the instructions that are part of a sequence into an array
      for (let j = i + 1; j <= sequenceStart + i; j++) {
        sequence.push(inputArr[j]);
      }

      //add the sequence of instructions array to a new array.
      sequencesArr.push(sequence);
    }
  }
  return sequencesArr;
}

function createBitsStrings(sequencesArr) {
  //create strings based on sequencesArr
  let bitsArrays = [];
  for (let i = 0; i < sequencesArr.length; i++) {
    bitsArrays.push('????????????????????????????????'.split(''));
  }
  return bitsArrays;
}

//put 0 into index i
function clearBit(bitArr, i) {
  bitArr[31 - i] = '0';
}

//put 1 into index i
function setBit(bitArr, i) {
  bitArr[31 - i] = '1';
}

//put ? into index i
function questionMarkBit(bitArr, i) {
  bitArr[31 - i] = '?';
}

//OR i j -> put result of OR into index i
function booleanSumBits(bitArr, i, j) {
  if (bitArr[31 - i] == '1' || bitArr[31 - j] == '1') {
    setBit(bitArr, i);
  } else {
    bitArr[31 - i] == '0' && bitArr[31 - j] == '0'
      ? clearBit(bitArr, i)
      : questionMarkBit(bitArr, i);
  }
}

//AND i j -> put result of AND into index i
function booleanMultiplyBits(bitArr, i, j) {
  if (bitArr[31 - i] == '1' && bitArr[31 - j] == '1') {
    setBit(bitArr, i);
  } else {
    bitArr[31 - i] == '0' || bitArr[31 - j] == '0'
      ? clearBit(bitArr, i)
      : questionMarkBit(bitArr, i);
  }
}

function applyInstruction(instruction, bitArr) {
  let instructionParts = instruction.split(' ');
  // console.log(instructionParts);
  if (instructionParts[0] === 'SET') {
    setBit(bitArr, parseInt(instructionParts[1]));
  } else if (instructionParts[0] === 'CLEAR') {
    clearBit(bitArr, parseInt(instructionParts[1]));
  } else if (instructionParts[0] === 'OR') {
    booleanSumBits(bitArr, instructionParts[1], instructionParts[2]);
  } else if (instructionParts[0] === 'AND') {
    booleanMultiplyBits(bitArr, instructionParts[1], instructionParts[2]);
  } else {
    console.error('Something terrible has happened');
  }
}

function executeInstructionSequence(instructionSequence, bitSequence) {
  for (let i = 0; i < instructionSequence.length; i++) {
    applyInstruction(instructionSequence[i], bitSequence);
  }
}

function runInstructrions(sequencesArr, bitsArrays) {
  for (let i = 0; i < sequencesArr.length; i++) {
    executeInstructionSequence(sequencesArr[i], bitsArrays[i]);
  }
}

function printToConsole(bitsArrays) {
  bitsArrays.forEach(arr => {
    console.log(arr.join(''));
  });
}

let inputArr = [];
rl.on('line', line => {
  inputArr.push(line);
  if (line === '0') {
    let sequencesArr = inputToSequences(inputArr); //Array with multiple sequences of instructions
    let bitsArrays = createBitsStrings(sequencesArr);
    runInstructrions(sequencesArr, bitsArrays);
    printToConsole(bitsArrays);
  } else {
  }
});

//Brief explanation of variables and the flow of this solution:
//inputArr: array containing console inputs. Each element is an inputed line.

//Then, the inputArr is broken down into sub arrays - each sub array containing a instruction sequences.
//for example, ["3", "Set 0", "Clear 1", "AND 0 1"] is a valid insruction sequence.
//Each instruction sequence is stored on an array called sequencesArr.

//For each instruction sequence in sequencesArr, it is created a corresponding string representing the 32-bits.

//Exercise 2 reminders:
//create Data Structure mini flowchart to help understand variables and transformation flow.
