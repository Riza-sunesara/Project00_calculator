#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
function Entering() {
    console.log(chalk.magentaBright(`
     ██████  █████  ██       ██████ ██    ██ ██       █████  ████████  ██████  ██████  
    ██      ██   ██ ██      ██      ██    ██ ██      ██   ██    ██    ██    ██ ██   ██ 
    ██      ███████ ██      ██      ██    ██ ██      ███████    ██    ██    ██ ██████  
    ██      ██   ██ ██      ██      ██    ██ ██      ██   ██    ██    ██    ██ ██   ██ 
     ██████ ██   ██ ███████  ██████  ██████  ███████ ██   ██    ██     ██████  ██   ██  \n`));
    console.log(chalk.bold(`
                             ________________________________
                            |                                |
                            |     ______________________     |
                            |    |                0     |    |
                            |    |______________________|    |
                            |     ____ ____ ____     ____    |
                            |    | 7  | 8  | 9  |   | +  |   |
                            |    |____|____|____|   |____|   |
                            |    | 4  | 5  | 6  |   | -  |   |
                            |    |____|____|____|   |____|   |
                            |    | 1  | 2  | 3  |   | x  |   |
                            |    |____|____|____|   |____|   |
                            |    | .  | 0  | =  |   | /  |   |
                            |    |____|____|____|   |____|   |
                            |                                |
                            |________________________________|\n\n`));
}
await Entering();
async function Requirements() {
    let answer = await inquirer.prompt([
        {
            message: chalk.blueBright("                               Enter your 1st number: "),
            type: "number",
            name: "num1"
        },
        {
            message: chalk.blueBright("                               Enter your 2nd number: "),
            type: "number",
            name: "num2"
        },
        {
            message: chalk.blueBright("                               Enter operation: "),
            type: "list",
            choices: ["+", "-", "*", "/"],
            name: "operator"
        }
    ]);
    if (answer.operator === "+") {
        console.log(chalk.green(`                                   YOUR ANSWER: ${answer.num1}+${answer.num2}=${answer.num1 + answer.num2}`));
    }
    else if (answer.operator === "-") {
        console.log(chalk.green(`                                   YOUR ANSWER: ${answer.num1}-${answer.num2}=${answer.num1 - answer.num2}`));
    }
    else if (answer.operator === "*") {
        console.log(chalk.green(`                                   YOUR ANSWER: ${answer.num1}*${answer.num2}=${answer.num1 * answer.num2}`));
    }
    else if (answer.operator === "/") {
        console.log(chalk.green(`                                   YOUR ANSWER: ${answer.num1}/${answer.num2}=${answer.num1 / answer.num2}`));
    }
    else {
        console.log(chalk.red("                               There was some problem please try again!"));
    }
}
;
async function repeat() {
    do {
        await Requirements();
        var rep = await inquirer.prompt({
            type: "input",
            name: "again",
            message: chalk.yellow("                      Do you Want to continue? Press Y for Yes: ")
        });
    } while (rep.again == 'Y' || rep.again == 'Yes' || rep.again == 'YES' || rep.again == 'yes' || rep.again == 'y');
}
await repeat();
