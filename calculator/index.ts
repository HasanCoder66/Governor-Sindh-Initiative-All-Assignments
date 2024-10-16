import inquirer from "inquirer";

const prompts = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Division", "Multiplicaton"],
  },
]);

console.log(prompts);

if (prompts.operator === "Addition") {
  console.log("your value is", prompts.firstNumber + prompts.secondNumber);
} else if (prompts.operator === "Subraction") {
  console.log("your value is", prompts.firstNumber - prompts.secondNumber);
} else if (prompts.operator === "Multiplicaton") {
  console.log("your value is", prompts.firstNumber * prompts.secondNumber);
} else if (prompts.operator === "Division") {
  console.log("your value is", prompts.firstNumber / prompts.secondNumber);
} else {
  console.log("Please select valid operation name");
}
