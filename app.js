// app.js

const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Application started");

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function (number) {
    if (isEven(number)) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
});

log("Application finished");  