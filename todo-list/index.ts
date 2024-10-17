#! usr/bin/env node
import inquirer from "inquirer";

const todosForCli = [];
let condition = true;

while (condition) {
  let addTodos = await inquirer.prompt([
    { message: "what you want to add in Todos", name: "todo", type: "input" },
    { message: "do you want to add more ?", name: "addmore", type: "confirm" },
  ]);
  todosForCli.push(addTodos);
  condition = addTodos.addmore;
  console.log(todosForCli);
}
