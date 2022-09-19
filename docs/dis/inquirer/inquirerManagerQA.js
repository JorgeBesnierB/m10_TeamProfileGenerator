// ###########################################################
// this file contains the questions for the inquirer
// ###########################################################

const questionsOneResponseManager= [
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the manager?',
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
    questionsOneResponseManager,
};
