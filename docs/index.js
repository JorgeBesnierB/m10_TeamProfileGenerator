//Import all the requiere modules
const inquirer = require('inquirer');
const fs = require ('fs');

//clases
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");

//files where questions are stored
const generalQA = require ('./dis/inquirer/inquirerQA')
const managerQA = require ('./dis/inquirer/inquirerManagerQA')
const engineerQA = require ('./dis/inquirer/inquirerEngineerQA')
const internQA = require ('./dis/inquirer/inquirerInternQA')
const NewCardQA = require('./dis/inquirer/inquirerNewCard')

//file where the html will be generated
const generateCardsHtml = require ('./src/cardGenerator')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        } 
    });
}

// Function call to initialize app.
function init() {
    //array to store the infromation
    let objArray = []
    let objGeneral = {};

    async function callInquirers(){
        const inq1 = await inquirer.prompt(generalQA.inquirerQA)
        .then(res0 => {
            objGeneral = res0;
            console.log("aqui mero jorge", objGeneral);
            return objGeneral;
        });
        switch(objGeneral.employeeRole) {
            case "Manager":
                const inqManager = await inquirer.prompt(managerQA.questionsOneResponseManager)
                .then(resManager => {
                    objGeneral = Object.assign(objGeneral, resManager)
                    console.log("assign", objGeneral)
                    const managerObj = new Manager (objGeneral.name, objGeneral.id, objGeneral.email, objGeneral.officeNumber);
                    return managerObj;
                });
            break;
            case "Engineer":
                const inqEngineer = await inquirer.prompt(engineerQA.questionsOneResponseEngineer)
                .then(resEngineer => {
                    objGeneral = Object.assign(objGeneral, resEngineer)
                    console.log("assign", objGeneral)
                    const engineerObj = new Engineer (objGeneral.name, objGeneral.id, objGeneral.email, objGeneral.gitHub);
                    return engineerObj;
                }); 
            break;
            case "Intern":
                const inqIntern = await inquirer.prompt(internQA.questionsOneResponseIntern)
                .then(resIntern => {
                    objGeneral = Object.assign(objGeneral, resIntern)
                    console.log("assign", objGeneral)
                    const internObj = new Intern (objGeneral.name, objGeneral.id, objGeneral.email, objGeneral.school);
                    return internObj;
                }); 
            break;
        
        }
        return objGeneral;
    }

    async function addNewCard (){
        let addBool = true;
        while(addBool){
            const inq1 = await inquirer.prompt(NewCardQA.inquirerNewCard)
                .then(res1 => {
                    let boolObj  = res1.NewCard; //get the name of the object property
                    console.log('respuesta del res' , boolObj);
                    if (boolObj === 'No'){
                        console.log('retornar el array')
                        addBool = false;
                    }
                    else{
                        console.log('llamara a generar otro objecto')
                        addBool = true;
                        return callInquirers() 
                        .then(res => {
                            console.log (res)
                            return objArray.push(objGeneral)
                        })   
                    }
                });
        }
        return objArray
    }

    //Call the aysnconous function to run every thing sequentally
    return addNewCard() 
    .then(res => {
        return res;
    })   
};


init()
    .then((res)=> {
        console.log(".then del final",res)
        console.log(res)
        let readmeObj = {
            name: "index.html"
            ,content: ''
        }
        readmeObj.content = generateCardsHtml(res);
        return readmeObj
    })
    .then((readMe)=>{
        console.log('final', readMe);
        writeToFile(readMe.name, readMe.content);
    })
    .catch(err => {
        console.log(err);
    })
;
