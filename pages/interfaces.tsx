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
