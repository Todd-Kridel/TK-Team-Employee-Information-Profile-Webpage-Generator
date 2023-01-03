// Include packages that are needed for the application.

const theInquirerObject = require("inquirer");
const theFileSystemObject = require("fs");
const theURLOpenObject = require("open");
//
const { doGenerateDynamicHTMLTextContent } = require("./src/utilityFunctions");
const { doGenerateFinalHTMLTextContent } = require("./src/utilityFunctions");


// Dependency supplemental systems and modules and files

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Have main variables for processing in the main block of the program.

let theEmployeeDynamicHTMLContentTextProcessing;
let theHTMLTextContent;
let newEmployeeObject;




// ???




// Create a function that writes the final compiled dynamic team employee profile data to the 
// "index.html" file.
//
function doFinalizeTheHTMLTextContentOfTheTeamEmployeeProfile() {
// Store in the final overall "theHTMLTextContent" variable value the final compiled value of 
// the ongoing "theEmployeeDynamicHTMLContentTextProcessing" compilation variable in 
// combination with the other static elements of the team profile information profile output 
// webpage (index.html) and then save that final text to the file.
//
//console.log(theEmployeeDynamicHTMLContentTextProcessing);
theHTMLTextContent = doGenerateFinalHTMLTextContent(theEmployeeDynamicHTMLContentTextProcessing);
//console.log(theHTMLTextContent);
theFileSystemObject.writeFileSync("./dist/index.html", theHTMLTextContent);
console.log("SOME FILE WRITE PROCESSING OCCURRED: Created file 'index.html' " + 
    "and saving the inputted information.");
console.log(theHTMLTextContent);
}


// Create a function that initializes/starts the application.

function doInitializeInitiateTheApplication() {
//
theEmployeeDynamicHTMLContentTextProcessing = ``;
theHTMLTextContent = ``;
//console.log("THE PROGRAM INITIALIZATION PROCESSING OCCURRED.");
doGetManagerProfileInformationFromTheManager();
}


////////////////
// START: THE PROGRAM
////////////////


// Issue a call to the initialization function to start the application processing.

doInitializeInitiateTheApplication();


////////////////
// END: THE PROGRAM
////////////////

