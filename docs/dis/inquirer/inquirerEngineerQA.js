// ###########################################################
// this file contains the questions for the inquirer
// ###########################################################

const questionsOneResponseEngineer= [
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the github of the engineer?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("invalid");
            }
        }
    },
]

//this gives us acess to the items we want to acces in other files.
module.exports = {
    questionsOneResponseEngineer,
};
