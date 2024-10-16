#! usr/bin/env node
import inquirer from "inquirer";
const prompts = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
]);
console.log(prompts);
const operator = prompts.operator.toLowerCase();
if (operator === "addition") {
    console.log("your value is", prompts.firstNumber + prompts.secondNumber);
}
else if (operator === "subtraction") {
    console.log("your value is", prompts.firstNumber - prompts.secondNumber);
}
else if (operator === "multiplication") {
    console.log("your value is", prompts.firstNumber * prompts.secondNumber);
}
else if (operator === "division") {
    if (prompts.secondNumber === 0) {
        console.log("Error: Cannot divide by zero!");
    }
    else {
        console.log("your value is", prompts.firstNumber / prompts.secondNumber);
    }
}
else {
    console.log("Please select a valid operation name");
}
