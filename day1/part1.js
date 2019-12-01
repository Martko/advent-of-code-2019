const moduleMasses = require("fs")
  .readFileSync("input.txt", "utf8")
  .split("\n");

const totalFuel = moduleMasses.reduce(
  (prevValue, currentValue) =>
    prevValue + Math.floor(parseInt(currentValue) / 3) - 2,
  0
);

console.log(totalFuel);
