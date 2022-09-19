// ###########################################################
// this file contains the questions for the inquirer
// ###########################################################

const questionsOneResponseIntern= [
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'internSchoool',
        message: 'What is the school of the intern?',
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
    questionsOneResponseIntern,
};
