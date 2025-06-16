// Import the readline module to handle user input from command line
import readline from "readline";

// Create an interface to read input and display output via command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initialize an empty array to hold tasks
const todos = [];

// Function to handle user's input choice from the menu
const handleInput = (option) => {
  switch (option) {
    case "1":
      // Option 1: Add a new task
      rl.question("\nEnter the Task: ", (task) => {
        todos.push(task);
        console.log("Task added: ", task);
        showMenu();
      });
      break;

    case "2":
      // Option 2: View all tasks
      console.log("\nYour Todo List:");
      todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
      showMenu();
      break;

    case "3":
      // Option 3: Exit the application
      console.log("\nGood bye!");
      rl.close();
      break;

    default:
      // Invalid input handling
      console.log("\nInvalid choice. Select from the given choices.");
      showMenu();
      break;
  }
};

// Function to display the menu options to the user
const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("2: View Tasks");
  console.log("3: Exit");

  rl.question("\nChoose an option: ", handleInput);
};

// Start the application by displaying the menu
showMenu();
