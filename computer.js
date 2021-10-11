/*--- Computer requirements ---*/
// Intcode program is list of integers separated by commas
// At each position is an opcode
// Opcodes are either 1, 2 or 99
// 99 -> immediately halt program
// Unknown -> something went wrong
// 1 -> add together numbers read from two positions and stores result in a third position.
// The three integers immediately after the opcode tell you these three positions
// First two indicate positions from which you should read input values
// Third indicates position at which output should be stored
// 2 -> like 1 but multiplies inputs instead of adding them
// Once processing an optcode, move to next one by stepping forward 4 positions
// Input --> list of Integers
// Final output --> final state of list

/*--- Inputs to check ---*/
const testInput1 = "1,0,0,0,99";
const testOutput1 = "2,0,0,0,99";

const testInput2 = "2,3,0,3,99";
const testOutput2 = "2,3,0,6,99";

const testInput3 = "2,4,4,5,99,0";
const testOutput3 = "2,4,4,5,99,9801";

const testInput4 = "1,1,1,4,99,5,6,0,99";
const testOutput4 = "30,1,1,4,2,5,6,0,99";

const adventCodeInput=
  "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,5,23,1,23,9,27,2,27,6,31,1,31,6,35,2,35,9,39,1,6,39,43,2,10,43,47,1,47,9,51,1,51,6,55,1,55,6,59,2,59,10,63,1,6,63,67,2,6,67,71,1,71,5,75,2,13,75,79,1,10,79,83,1,5,83,87,2,87,10,91,1,5,91,95,2,95,6,99,1,99,6,103,2,103,6,107,2,107,9,111,1,111,5,115,1,115,6,119,2,6,119,123,1,5,123,127,1,127,13,131,1,2,131,135,1,135,10,0,99,2,14,0,0";

/*--- Computer Code ---*/
let currentPosition = 0;
const incrementToNextOpCode = 4;

const OPCODE_HALT_PROGRAM = 99;
const OPCODE_ADD = 1;
const OPCODE_MULTIPLY = 2;

const opCodeComputer = (input) => {
  while (
    currentPosition < input.length &&
    Number.parseInt(input[currentPosition]) !== OPCODE_HALT_PROGRAM
  ) {
    const opCode = Number.parseInt(input[currentPosition]);

    const position1 = Number.parseInt(input[currentPosition + 1]);
    const position2 = Number.parseInt(input[currentPosition + 2]);
    const position3 = Number.parseInt(input[currentPosition + 3]);

    const firstNumber = Number.parseInt(input[position1]);
    const secondNumber = Number.parseInt(input[position2]);

    if (opCode === OPCODE_ADD) {
      input[position3] = (firstNumber + secondNumber).toString();
      currentPosition += incrementToNextOpCode;
      continue;
    }

    if (opCode === OPCODE_MULTIPLY) {
      input[position3] = (firstNumber * secondNumber).toString();
      currentPosition += incrementToNextOpCode;
      continue;
    }
    throw new Error("Opcode is Unknown");
  }
  return input;
};

/*--- Testing the inputs ---*/

// Advent code input
let inputArray;

inputArray = adventCodeInput.split(",");
console.log(inputArray);

inputArray[1] = 12;
inputArray[2] = 2;
console.log(inputArray);

console.log(opCodeComputer(inputArray));
console.log("");

// Test Input 1
// inputArray = testInput1.split(",");
// console.log(inputArray);
// console.log(opCodeComputer(inputArray));
// console.log("");

// Test Input 2
// inputArray = testInput2.split(",");
// console.log(inputArray);
// console.log(opCodeComputer(inputArray));
// console.log("");

// Test Input 3
// inputArray = testInput3.split(",");
// console.log(inputArray);
// console.log(opCodeComputer(inputArray));
// console.log("");

// Test Input 4
// inputArray = testInput4.split(",");
// console.log(inputArray);
// console.log(opCodeComputer(inputArray));
// console.log("");

