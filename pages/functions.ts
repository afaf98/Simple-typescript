/***** Functions ( optional and deafult parameters)*****/

function sum(a: number, b: number): number {
  return a + b;
}
//Define the paramenters and type of the function
type MyFunc = (a: number, b: number) => number;
// you create the function with the same type
const sum2: MyFunc = (a, b) => a + b;

/****UNKOWN NUMBER OF ARGUMENTS *****/

function sumEverything(
  arg1: string,
  arg2: boolean,
  ...numbers: number[]
): number {
  return numbers.reduce((result, num) => result + num, 0);
}

/****OVERLOADS *****/
//Calculate area rettangolo o quadrato
function calcArea(width: number, height: number): number;
function calcArea(lenght: number): number;
function calcArea(...args: number[]): number {
  //if you have 2 arguments
  if (args.length === 2) {
    return args[0] * args[1];
  }
  //otherwise
  return Math.pow(args[0], 2);
}
