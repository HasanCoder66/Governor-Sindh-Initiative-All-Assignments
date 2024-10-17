import inquirer from 'inquirer';

// Array to store the todo items
let todos: { task: string; completed: boolean }[] = [];

// Function to add a new task to the list
function addTask(task: string): void {
  todos.push({ task: task, completed: false });
  console.log(`Task "${task}" added to the list.`);
}

// Function to mark a task as completed by its index
function completeTask(index: number): void {
  if (index < todos.length) {
    todos[index].completed = true;
    console.log(`Task "${todos[index].task}" marked as completed.`);
  } else {
    console.log("Invalid task number.");
  }
}

// Function to delete a task by its index
function deleteTask(index: number): void {
  if (index < todos.length) {
    const removedTask = todos.splice(index, 1);
    console.log(`Task "${removedTask[0].task}" has been deleted.`);
  } else {
    console.log("Invalid task number.");
  }
}

// Function to list all tasks with their statuses
function listTasks(): void {
  console.log("\nTodo List:");
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo.task} [${todo.completed ? "Completed" : "Pending"}]`);
  });
}

// Main function to prompt user for actions
async function runTodoApp() {
  while (true) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Add Task', 'Complete Task', 'Delete Task', 'List Tasks', 'Exit'],
      },
    ]);

    if (answer.action === 'Add Task') {
      const newTaskAnswer = await inquirer.prompt([
        { type: 'input', name: 'task', message: 'Enter your task:' },
      ]);
      addTask(newTaskAnswer.task);
    } 
    else if (answer.action === 'Complete Task') {
      if (todos.length === 0) {
        console.log("No tasks to complete.");
      } else {
        const completeTaskAnswer = await inquirer.prompt([
          {
            type: 'input',
            name: 'index',
            message: 'Enter the task number to mark as completed:',
            validate: (value: string) => {
              const number = parseInt(value);
              if (!isNaN(number) && number > 0 && number <= todos.length) {
                return true;
              }
              return 'Please enter a valid task number.';
            },
          },
        ]);
        completeTask(parseInt(completeTaskAnswer.index) - 1);
      }
    } 
    else if (answer.action === 'Delete Task') {
      if (todos.length === 0) {
        console.log("No tasks to delete.");
      } else {
        const deleteTaskAnswer = await inquirer.prompt([
          {
            type: 'input',
            name: 'index',
            message: 'Enter the task number to delete:',
            validate: (value: string) => {
              const number = parseInt(value);
              if (!isNaN(number) && number > 0 && number <= todos.length) {
                return true;
              }
              return 'Please enter a valid task number.';
            },
          },
        ]);
        deleteTask(parseInt(deleteTaskAnswer.index) - 1);
      }
    } 
    else if (answer.action === 'List Tasks') {
      listTasks();
    } 
    else if (answer.action === 'Exit') {
      console.log('Goodbye!');
      break;
    }
  }
}

// Start the application
runTodoApp();
