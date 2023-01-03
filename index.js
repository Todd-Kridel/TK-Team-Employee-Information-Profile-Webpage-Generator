

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


// Create arrays of the details of all of the questions that are to be asked for the creation 
// of the team profile page/file.

//
// the Inquirer questions/arrays
// /////////////////////////////
//
// ( The start of the application. )
// [ managerInformationQuestions ]
// "What is the manager's name?"; managerName
// "What is the manager's employee ID?"; managerEmployeeId
// "What is the manager's email address?"; managerEmailAddress
// "What is the manager's office number?"; managerOfficeNumber
//
// [ informationEntryMenuAction ] <= [ informationEntryMenuOptions ]
// "What do you now want to do? possible options:"; managerEntryOptions
//   "Enter engineer employee information."; engineerEntryOptionSelection
//   "Enter intern employee information."; internEntryOptionSelection
//   "Finish the team profile entry."; finishEntryOptionSelection
//     ( Exit the prompt application and generate the team profile HTML page/file. )
//
// [ engineerInformationEntryQuestions ]
// "What is the engineer's name?"; engineerName
// "What is the engineer's employee ID?"; engineerEmployeeId
// "What is the engineer's email address?"; engineerEmailAddress
// "What is the engineer's GitHub username?"; engineerGitHubUserName
// ( Return to Entry Options menu. )
//
// [ internInformationEntryQuestions ]
// "What is the intern's name?"; internName
// "What is the intern's employee ID?"; internEmployeeId
// "What is the intern's email address?"; internEmailAddress
// "What is the intern's school?"; internSchool
// ( Return to Entry Options menu. )
//
// /////////////////////////////
// 
// program logic/process flow:
// if new session => display manager questions
// if done with manager questions => display manager entry options
//   if engineer option is selected => display engineer questions
//     if done with engineer questions => display manager entry options
//   if intern option is selected => display intern questions
//     if done with intern questions => display manager entry options
//   if finish option is selected => exit the question process and generate and display HTML
//
//
const managerInformationQuestions = 
[
{
name: "name", 
type: "input", 
message: "What is the manager's name?"
}, 
{
name: "id", 
type: "input", 
message: "What is the manager's employee ID?"
}, 
{
name: "emailAddress", 
type: "input", 
message: "What is the manager's email address?"
}, 
{
name: "officeNumber", 
type: "input", 
message: "What is the manager's office number?"
}
// ( Go to Entry Options menu. )
];
//
//
const engineerInformationEntryQuestions = 
[
{
name: "name", 
type: "input", 
message: "What is the engineer's name?"
}, 
{
name: "id", 
type: "input", 
message: "What is the engineer's employee ID?"
}, 
{
name: "emailAddress", 
type: "input", 
message: "What is the engineer's email address?"
}, 
{
name: "githubUserName", 
type: "input", 
message: "What is the engineer's GitHub username?"
}
// ( Return to Entry Options menu. )
];
//
//
const internInformationEntryQuestions = 
[
{
name: "name", 
type: "input", 
message: "What is the intern's name?"
}, 
{
name: "id", 
type: "input", 
message: "What is the intern's employee ID?"
}, 
{
name: "emailAddress", 
type: "input", 
message: "What is the intern's email address?"
}, 
{
name: "school", 
type: "input", 
message: "What is the intern's school?"
}
// ( Return to Entry Options menu. )
];
//
//
const informationEntryMenuOptions = 
  // => informationEntryMenuAction of [ informationEntryOptionMenuQuestions]
[
"Enter engineer employee information.", 
"Enter intern employee information.", 
"Finish the team profile entry."
];
//
//
const informationEntryOptionMenuQuestions = 
[
{
name: "informationEntryMenuAction",  //  
type: "list", 
message: "What do you now want to do? possible options:", 
choices: informationEntryMenuOptions
}
];


// Create a function that will get from the manager the manager information that is necessary 
// for processing of the team profile.
//
function doGetManagerProfileInformationFromTheManager() {
// Issue a call to the prompt function of the inquirer object to get manager information for 
// team profile file.
theInquirerObject
.prompt(managerInformationQuestions)
.then((answers) => {
  //console.log(answers);
  //console.log(answers.name + " " + answers.id + " " + answers.emailAddress + " " + 
  //  answers.officeNumber);
  newEmployeeObject = new Manager(answers.name, answers.id, answers.emailAddress, 
    answers.officeNumber);
  // Call to the utility function that generates the ongoing compilation of the team profile 
  // dynamic HTML file text based on the ongoing user input.
  theEmployeeDynamicHTMLContentTextProcessing = theEmployeeDynamicHTMLContentTextProcessing + 
    doGenerateDynamicHTMLTextContent(newEmployeeObject);
  console.log("Added Manager: " + newEmployeeObject.name);
  //console.log(theEmployeeDynamicHTMLContentTextProcessing);
  doGetInformationEntryActionsFromTheManager(); 
  //
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt could not be rendered in the current environment.
  }
  else {
    // A problem occurred with the utility-function processing of the prompt answer data.
    console.log("ERROR: A problem occurred with the processing of the prompt answer data.");
  };
});
}


// Create a function that will get from the manager the next desired information entry action 
// that is necessary for processing of the team profile.
//
function doGetInformationEntryActionsFromTheManager() {
// Issue a call to the prompt function of the inquirer object to get manager information for 
// team profile file.
theInquirerObject
.prompt(informationEntryOptionMenuQuestions)
.then((answer) => {
  console.log(answer.informationEntryMenuAction);
  // Call to the utility function that generates the ongoing compilation of the team profile 
  // dynamic HTML file text based on the ongoing user input.
  switch (answer.informationEntryMenuAction) { 
    //
    case "Enter engineer employee information.": 
      doGetEngineerProfileInformationFromTheManager();
      break;  
    case "Enter intern employee information.": 
      doGetInternProfileInformationFromTheManager();
      break;
    case "Finish the team profile entry.":
      // Call to the utility function that finalizes the output HTML text of the team employee 
      // profile. 
      doFinalizeTheHTMLTextContentOfTheTeamEmployeeProfile();
      //
      // Open the generated HTML file/URL in the default browser.
      theURLOpenObject("./dist/index.html");
      console.log("EXIT THE APPLICATION");
      break;
  }; 
//
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt could not be rendered in the current environment.
  }
  else {
    // A problem occurred with the utility-function processing of the prompt answer data.
    console.log("ERROR: A problem occurred with the processing of the prompt answer data.");
  };
});
//
}
//
//
// Create a function that will get from the manager the engineer information that is necessary 
// for processing of the team profile.
//
function doGetEngineerProfileInformationFromTheManager() {
// Issue a call to the prompt function of the inquirer object to get information for the 
// team profile file.
theInquirerObject
.prompt(engineerInformationEntryQuestions)
.then((answers) => {
  newEmployeeObject = new Engineer(answers.name, answers.id, answers.emailAddress, 
    answers.githubUserName);
  // Call to the utility function that generates the ongoing compilation of the team profile 
  // dynamic HTML file text based on the ongoing user input.
  theEmployeeDynamicHTMLContentTextProcessing = theEmployeeDynamicHTMLContentTextProcessing + 
    doGenerateDynamicHTMLTextContent(newEmployeeObject);
  console.log("Added Engineer: " + newEmployeeObject.name);
  doGetInformationEntryActionsFromTheManager();
  //
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt could not be rendered in the current environment.
  } 
  else {
    // A problem occurred with the utility-function processing of the prompt answer data.
    console.log("ERROR: A problem occurred with the processing of the prompt answer data.");
  };
});
}
//
//
// Create a function that will get from the manager the intern information that is necessary 
// for processing of the team profile.
//
function doGetInternProfileInformationFromTheManager() {
// Issue a call to the prompt function of the inquirer object to get information for the 
// team profile file.
theInquirerObject
.prompt(internInformationEntryQuestions)
.then((answers) => {
  newEmployeeObject = new Intern(answers.name, answers.id, answers.emailAddress, 
    answers.school);
  // Call to the utility function that generates the ongoing compilation of the team profile 
  // dynamic HTML file text based on the ongoing user input.
  theEmployeeDynamicHTMLContentTextProcessing = theEmployeeDynamicHTMLContentTextProcessing + 
    doGenerateDynamicHTMLTextContent(newEmployeeObject);
  console.log("Added Intern: " + newEmployeeObject.name);
  doGetInformationEntryActionsFromTheManager();
  //
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt could not be rendered in the current environment.
  }
  else {
    // A problem occurred with the utility-function processing of the prompt answer data.
    console.log("ERROR: A problem occurred with the processing of the prompt answer data.");
  };
});
}


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

