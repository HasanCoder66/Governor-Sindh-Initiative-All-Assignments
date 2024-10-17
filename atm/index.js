#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 100000;
const atmPinCode = 3866;
console.log("Welcome to the ATM!");
console.log(" If you try this then atm service so your password is 3866");
const answer = await inquirer.prompt([
    { message: "Enter your pin code here", name: "pincode", type: "number" },
]);
if (answer.pincode === atmPinCode) {
    console.log("YES! Access Granted");
    const operationAnswer = await inquirer.prompt([
        {
            message: "Please select one option",
            name: "operation",
            type: "list",
            choices: ["withdraw", "balance inquiry", "deposit"],
        },
    ]);
    if (operationAnswer.operation === "withdraw") {
        const enterAmountForWithdrawl = await inquirer.prompt([
            {
                message: "Enter your amount for withdrawal",
                name: "withdrawlAmount",
                type: "number",
            },
        ]);
        if (enterAmountForWithdrawl.withdrawlAmount > totalBalance) {
            console.log("Insufficient balance");
        }
        else {
            totalBalance -= enterAmountForWithdrawl.withdrawlAmount;
            console.log("You have successfully withdrawn Rs " +
                enterAmountForWithdrawl.withdrawlAmount);
            console.log("Your remaining account balance is Rs " + totalBalance);
        }
    }
    else if (operationAnswer.operation === "balance inquiry") {
        console.log("Your balance is Rs " + totalBalance);
    }
    else if (operationAnswer.operation === "deposit") {
        const enterAmountForDeposit = await inquirer.prompt([
            {
                message: "Enter your amount for deposit",
                name: "depositAmount",
                type: "number",
            },
        ]);
        totalBalance += enterAmountForDeposit.depositAmount;
        console.log("You have successfully deposited Rs " + enterAmountForDeposit.depositAmount);
        console.log("Your account balance is Rs " + totalBalance);
    }
}
else {
    console.log("You entered a wrong pin code");
}
