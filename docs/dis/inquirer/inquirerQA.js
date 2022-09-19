// ###########################################################
// this file contains the questions for the inquirer
// ###########################################################

const inquirerQA= [
    {
        type:"list",
        name: "employeeRole",
        message: 'What is the role of the employee?',
        choices: ["Manager", "Engineer", "Intern"],
    },
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the name of the employee?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("invalid");
            }
        }
    },
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is the id of the employee?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("invalid");
            }
        }
    },
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is the employee email?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("invalid");
            }
        }
    },
];

//this gives us acess to the items we want to acces in other files.
module.exports = {
    inquirerQA,
};
