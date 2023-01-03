

function doGenerateDynamicHTMLTextContent(passedEmployeeObject) {

// passedEmployeeObject:
//   passedEmployeeName, passedEmployeeRole, passedEmployeeId, passedEmployeeEmailAddress, 
//   passedEmployeeExtraRoleSpecificDetail) {

// Dynamic HTML Text Areas:
// id="cardHeaderDynamicTextContentArea"
// id="cardDetailsDynamicTextContentArea"

// WHEN I am prompted for my team members and their information...
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input. The HTML webpage is titled “My Team” and contains for each entered employee a card div display boxes that lists the name, title/role, and other role-specific primary property information.
//
// WHEN I click on an email address in the HTML...
// THEN my default email program opens and populates the TO field of the email with the address. 
//
// WHEN I click on the GitHub username...
// THEN that GitHub profile opens in a new tab.

let name = passedEmployeeObject.getName();
let roleIcon = "";
let role = passedEmployeeObject.constructor.name;
let id = passedEmployeeObject.getId();
let emailAddress = passedEmployeeObject.getEmailAddress();
let extraInformation = "";  // additional role-specific information

let theEmployeeDynamicHTMLContentTextProcessing = ``;

//console.log(role);
switch (role) {
//
// employee main class information that is common among employee-type sub-classes: 
//   name, employee ID, email address
// * = employee information that is role-specific 
//
// manager information: name, employee ID, email address, and *office number*
// engineer information: name, employee ID, email address, and *GitHub user name*
// intern information: name, ID, email address, and *school*
//
  case "Manager": 
    roleIcon = "./assets/images/manager_icon.png";
    extraInformation = "Office: " + passedEmployeeObject.getOfficeNumber();
    break;
  case "Engineer": 
    roleIcon = "./assets/images/engineer_icon.png";
    extraInformation = "GitHub: <a href='https://github.com/" + passedEmployeeObject.
      getGitHub() + "' target='_blank'>" + passedEmployeeObject.getGitHub() + "</a>";
    break;
  case "Intern": 
    roleIcon = "./assets/images/intern_icon.png";
    extraInformation = "School: " + passedEmployeeObject.getSchool();
    break;
}

theEmployeeDynamicHTMLContentTextProcessing = 
`
    <div class="employeeCard">
      <div class="employeeCardHeader">
        <div class="cardHeaderDynamicTextContentArea" id="cardHeaderDynamicTextContentArea">
          <p>${name}</p>
          <p><img src='${roleIcon}'></img> ${role}</p>
        </div>
      </div>
      <div class="employeeCardBody">
        <div class="employeeCardDetails">
          <div class="cardDetailsDynamicTextContentArea" id="cardDetailsDynamicTextContentArea">
            <p>ID: ${id}</p>
            <p>Email: <a href='mailto:${emailAddress}'>${emailAddress}</a></p>
            <p>${extraInformation}</p>
          </div>
        </div>
      </div>
    </div>
`;

return theEmployeeDynamicHTMLContentTextProcessing;

}  // END: "doGenerateDynamicHTMLTextContent" function


function doGenerateFinalHTMLTextContent(passedEmployeeDynamicHTMLContentProcessingText) {

//console.log(passedEmployeeDynamicHTMLContentProcessingText);
let theHTMLTextContent = ``;
let theEmployeeStaticHTMLContentTextTop = ``;
let theEmployeeDynamicHTMLContentText = passedEmployeeDynamicHTMLContentProcessingText;
let theEmployeeStaticHTMLContentTextBottom = ``;

theEmployeeStaticHTMLContentTextTop = 
`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="Description" content="Enter your description here" />
  <!-- -->
  <link rel="stylesheet" href="./dist/css/style.css" />
  <link rel="icon" type="image/ico" href="favicon.ico" />
  <title>TK Team Employee Information Profile Webpage Generator</title>
</head>

<body>
<!-- -->
<div class="mainPageContainer">
  <header>
  <h1>My Team</h1>
  </header>
  <div class="pageBodyContainer">
`;

theEmployeeStaticHTMLContentTextBottom = 
`
  </div>
</div>

<script src="index.js">
</script>

</body>

</html>
`;

theHTMLTextContent = theEmployeeStaticHTMLContentTextTop + theEmployeeDynamicHTMLContentText + 
  theEmployeeStaticHTMLContentTextBottom;

return theHTMLTextContent;

}  // END: "doGenerateFinalHTMLTextContent" function


// exported module code

module.exports = { doGenerateDynamicHTMLTextContent, doGenerateFinalHTMLTextContent };

