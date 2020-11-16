//INTERFACES
//Definition : One of TypeScript’s core principles is that type checking
//focuses on the shape that values have. This is sometimes called
// “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role
// of naming these types, and are a powerful way of defining contracts
// within your code as well as contracts with code outside of your project.

interface A {
  someProp: number;
}

interface B {
  someProp: number;
  // anotherProp : number; if Added this proprety the shape it's different
}

let c: A = { someProp: 1 };
let d: B = c;
//This works because they have the same shape

// Interfaces

interface Profile {
  name: string;
  age?: number;
}

let profile: Profile = {
  name: "John",
  //That is alright if you put the ? operetor after
  // age, otherwise the value of age must be defined here
};

/*
You can also set the values of interfaces inline

***  profile.name  = "Jim";
*/

/****  INDEX SIGNATURE  *****/

interface C {
  Prop: string;
  //Or defined as a Number or As a String
  [ket: string]: number | string;
}

const e: C = { Prop: "Ciao" };
e.x = 1;
e.y = 2;

/*******CALL SIGNATURE ******/

interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

//Declaring the function
const sum: Sum = (a, b) => a + b;

sum.prop1 = "some prop";

/**** EXTENDING INTERFACES *****/

interface Parent {
  x: string;
}
interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

//To extend an interface you have to use "EXTENDS" function
// you can extend more than one Parent in the Child interface
interface Child extends Parent, Parent2, Parent3 {}
// Now the Child inherit all the props from the parent

let child: Child = { x: "Something", y: "Another prop", z: "LAst Prop" };
