const crypto = require("crypto");

const numberOfRolls = 5;

console.log("Rolling the dice...");

for (let i = 1; i <= numberOfRolls; i++) {

    const diceRoll = crypto.randomInt(1, 7);

    console.log(`Dice Roll ${i}: ${diceRoll}`);
}