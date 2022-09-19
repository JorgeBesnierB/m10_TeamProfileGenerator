// ###########################################################
// this file contains the questions for the inquirer
// ###########################################################

const inquirerNewCard= [
    {
        type:"list",
        name: "NewCard",
        message: 'Whant to add a new card?',
        choices: ["Yes", "No"],
    },
];

//this gives us acess to the items we want to acces in other files.
module.exports = {
    inquirerNewCard,
};
