const SumOfTheNumbers = require("./calculator");
const ProOfTheNumber = require("./product");
const SubOfTheNumber = require("./subtract");

const a = 456;
const b = 789;

console.log("sum : " + SumOfTheNumbers(a, b));
console.log("sub : " + SubOfTheNumber(a, b));
console.log("multiple: " + ProOfTheNumber(a, b));
