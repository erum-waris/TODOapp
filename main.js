#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.greenBright
    .bold `**** Hey Guyzz Welcome to ERUM WARIS'S Todo List App****`);
let TODOS = [];
async function TODOapp(TODOS) {
    do {
        const todoapp = await inquirer.prompt([
            {
                name: "question",
                type: "confirm",
                message: "do you wanna proceed onwards?",
                default: "true",
            },
            {
                name: "options",
                type: "list",
                message: "select option to proceed functionalities:",
                choices: ["add", "view", "delete", "update"],
            },
        ]);
        if (todoapp.options === "add") {
            let addTodo = await inquirer.prompt({
                name: "add",
                type: "input",
                message: "Please add item here",
            });
            TODOS.push(addTodo.add);
            TODOS.forEach(TODOS => { console.log(TODOS); });
        }
        if (todoapp.options === "view") {
            console.log(chalk.bgCyan.greenBright.italic `*** YOUR TO DO LIST ***`);
            TODOS.forEach(TODOS => { console.log(TODOS); });
            console.log(chalk.bgCyan.greenBright.italic `*** THANKYOU ***`);
        }
        if (todoapp.options === "delete") {
            let deleteTodo = await inquirer.prompt({
                name: "delete",
                type: "list",
                message: "delete items from list",
                choices: TODOS.map((item) => item),
            });
            let newTodo = TODOS.filter((val) => val !== deleteTodo.delete);
            TODOS = [...newTodo];
            TODOS.forEach(TODOS => { console.log(TODOS); });
        }
        if (todoapp.options === "update") {
            let updateTodo = await inquirer.prompt({
                name: "update",
                type: "list",
                message: "update items in the list",
                choices: TODOS.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                name: "add",
                type: "input",
                message: "Please add item here",
            });
            let newTodo = TODOS.filter((val) => val !== updateTodo.update);
            TODOS = [...newTodo, addTodo.add];
            TODOS.forEach(TODOS => { console.log(TODOS); });
        }
    } while (true);
}
TODOapp(TODOS);
