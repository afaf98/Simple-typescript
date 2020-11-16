"use strict";
/***** Functions ( optional and deafult parameters)*****/
function sum(a, b) {
    return a + b;
}
// you create the function with the same type
var sum2 = function (a, b) { return a + b; };
/****UNKOWN NUMBER OF ARGUMENTS *****/
function sumEverything(arg1, arg2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    return numbers.reduce(function (result, num) { return result + num; }, 0);
}
function calcArea() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    //if you have 2 arguments
    if (args.length === 2) {
        return args[0] * args[1];
    }
    //otherwise
    return Math.pow(args[0], 2);
}
