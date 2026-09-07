const args = process.argv.slice(2);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (args.length !== 3) {
    console.log("Usage: node calculator.js <operation> <number1> <number2>");
    process.exit();
}

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
    process.exit();
}

let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "subtract":
        result = num1 - num2;
        break;

    case "multiply":
        result = num1 * num2;
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
            process.exit();
        }
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operation.");
        console.log("Use: add, subtract, multiply, or divide");
        process.exit();
}

console.log(`Result: ${result}`);