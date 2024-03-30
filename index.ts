#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter the First number: ", type: "number", name: "First_Number" },
  {
    messege: "Enter the Second number: ",
    type: "number",
    name: "Second_Number",
  },
  {
    message: "Enter the opertaor for action: ",
    type: "list",
    name: "opr",
    choices: ["Addition", "Subtraction", "Multiplication", "Division","Modulus"],
  },
]);
console.log(answer);

if (answer.opr == "Addition") {
  console.log(answer.First_Number + answer.Second_Number);
} else if (answer.opr === "Subtraction") {
  console.log(answer.First_Number - answer.Second_Number);
} else if (answer.opr === "Multiplication") {
  console.log(answer.First_Number * answer.Second_Number);
} else if (answer.opr === "Division") {
  console.log(answer.First_Number / answer.Second_Number);
} else if (answer.opr === "Modulus") {
  console.log(answer.First_Number % answer.Second_Number);
} else {
  console.log("Operator Not Found!");
}
