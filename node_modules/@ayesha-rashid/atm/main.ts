#! /usr/bin/env node

import inquirer from "inquirer";

let user = await  inquirer.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "welcome ayesha rashid"
    },

    {
        type: "number",
        name: "pincode",
        message: "enter your 4 digit pincode"
    },

    //creating listing and withdraw methods

    {
        type: "list",
        name: "accounttype",
        message: "Select your account type",
        choices: ["current","savings"]
    },

    //transition type

    {
        type: "list",
        name: "transitionType",
        message: "select your transitionType",
        choices: ["cash","withdraw"]
    },

    //selected amount

    {
        type: "list",
        name: "amount",
        message: "select your amount",
        choices: [1000, 2000, 5000, 10000],
        when(user){
            return user.transitionType === "cash"
        }
    },

    {
        type: "number",
        name: "amount",
        message: "enter your amount",
        when(user){
            return user.transitionType === "withdraw"
        }
    },


])

//final slip 

if(user.pincode){
    const balance = Math.floor(Math.random() * 10000 + 1)
    console.log(balance)
    const enteramount = user.amount;

    if(enteramount <= balance){
        const remaining = balance - enteramount
        console.log(`you have withdraw rupees ${enteramount}and you have remaining balance ${remaining}`)
    }
}