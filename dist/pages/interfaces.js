"use strict";
//INTERFACES
//Definition : One of TypeScript’s core principles is that type checking
//focuses on the shape that values have. This is sometimes called
// “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role
// of naming these types, and are a powerful way of defining contracts
// within your code as well as contracts with code outside of your project.
var c = { someProp: 1 };
var d = c;
var profile = {
    name: "John",
};
var e = { Prop: "Ciao" };
e.x = 1;
e.y = 2;
//Declaring the function
var sum = function (a, b) { return a + b; };
sum.prop1 = "some prop";
// Now the Child inherit all the props from the parent
var child = { x: "Something", y: "Another prop", z: "LAst Prop" };
