const moduleMasses = require("fs")
  .readFileSync("input.txt", "utf8")
  .split("\n");

function calculateFuel(mass) {
  let fuel = Math.floor(mass / 3) - 2;

  if (fuel > 0) {
    fuel += calculateFuel(fuel);
  }

  return fuel < 0 ? 0 : fuel;
}

const totalFuel = moduleMasses.reduce(
  (prevValue, currentValue) => prevValue + calculateFuel(currentValue),
  0
);

console.log(totalFuel);
