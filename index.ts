#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { names } from "tinycolor2";

const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
}

async function welcom() {
    let rainbow = chalkAnimation.rainbow('lets start calculation'); //start
    await sleep();
    rainbow.stop();
    console.log(`
    ___________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    console.log(`${rainbow} is fine`);
}

 await welcom();

async function askQuestion() {
    const ans = await inquirer
    .prompt([
 /* Pass your question in here */
 {
    type:"list",
    name:"operator",
    message:"which operation you want to perform? \n",
    choices:["Addition","Subtraction","Multiplication","Division"]
 },
 {
    type:"number",
    name:"num1",
    message:"Enter number 1: "
 },  
 {
    type:"number",
    name:"num2",
    message:"Enter number 2: "

 }
]);
 if
(ans.operator == "Addition") {
    console.log(chalk.red(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`));

} else if
 (ans.operator == "Subtraction") {
    console.log(chalk.red(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`));

} else if
(ans.operator == "Multiplication") {
    console.log(chalk.red(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`));

} else if
 (ans.operator == "Division") {
    console.log(chalk.red(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`));
}

};

//askQuestion();

async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
                type: "input",  
                name: "restart",  
                message: "Do you want to continue? Press y or n: " 
            });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'Yes'); 
}

startAgain();  


