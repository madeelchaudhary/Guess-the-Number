import inquirer from "inquirer";

async function askName() {
  const answers = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Stranger";
    },
  });
  return answers.user_name;
}

async function askGameLevel() {
  const answers = await inquirer.prompt({
    name: "userChoice",
    type: "list",
    message: "Choose the difficulty level.",
    choices: ["Easy", "Hard"],
    default() {
      return "Easy";
    },
  });
  return answers.userChoice === "Easy" ? 10 : 5;
}

async function askNumber() {
  const answers = await inquirer.prompt({
    name: "num",
    type: "number",
    message: "Enter your number:",
  });

  if (isNaN(answers.num)) {
    throw "Please enter a valid number.";
  }
  return answers.num;
}

async function askToContinue() {
  const answers = await inquirer.prompt({
    name: "userChoice",
    type: "confirm",
    message: "Will you give it another try!",
  });
  return answers.userChoice;
}

export { askName, askGameLevel, askNumber, askToContinue };
