
# Bootcamp Module 10 Challenge Assignment -- TK Team Employee Information Profile Webpage Generator

![a license icon](./assets/images/License_Badge__The_MIT_License.jpg)


--------------------------------

## Table of Contents

[1. Project/Program Description](#1-ProjectProgram-Description)

[2. Program Installation Information](#2-Program-Installation-Information)

[3. Program Usage Information](#3-Program-Usage-Information)

[4. Program Credits/Contributors](#4-Program-CreditsContributors)

[5. Program Test Information](#5-Program-Test-Information)

[6. Program Questions](#6-Program-Questions)

[7. Program License Information](#7-Program-License-Information)

--------------------------------


## 1. Project/Program Description

This current Module 10 Challenge assignment -- Team Employee Information Profile Webpage Generator application -- provided a good mechanism for learning and implementing more back-end JavaScript programming...including server API interface coding and console prompt scripting. A large portion and effort of the assignment was for data class/object design and implements...and to consider about and address concerns of data validation and automated unit testing for various functions and processes to ensure proper operation. The assignment was also a good mechanism for designing and implementing dynamically-generated HTML and then designing and applying the corresponding external-file Cascading Style Sheets (CSS) -- design appearance -- code. This assignment provided some additional attention to the concepts/objectives of "Accessibility" and "Responsiveness".

The application is a command-line application that accepts user input that use. The application uses the npm Inquirer module to prompt to the user for the information that is necessary for processing.


----


The objectives and operational features -- user story and acceptance criteria items -- of the assignment application were as follows:

|
[ User Story ]
|

AS A manager...
I WANT to generate a webpage that displays my team's basic info...
SO THAT I have quick access to their emails and GitHub profiles.

|
[ Acceptance Criteria ]
|

WHEN I am prompted for my team members and their information...
THEN an HTML file is generated that displays a nicely formatted team roster based on user input. The HTML webpage is titled “My Team” and contains for each entered employee a card div display boxes that lists the name, title/role, and other role-specific primary property information.

WHEN I click on an email address in the HTML...
THEN my default email program opens and populates the TO field of the email with the address. 

WHEN I click on the GitHub username...
THEN that GitHub profile opens in a new tab.

WHEN I start the application...
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number.

WHEN I enter the team manager’s name, employee ID, email address, and office number...
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team.

WHEN I select the engineer option...
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.

WHEN I select the intern option...
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.

WHEN I decide to finish building my team...
THEN I exit the application, and the HTML is generated,

|
[ Additional Grading Criteria ]
|

Also good coding practices and good GitHub/Git repository configuration.

Also: The application includes a usage-demonstration walk-through video. The video demonstrates about the functionality of the application and its 4 passing tests. A link to the video is included in the README file of the repository. The video demonstrates about how a user invokes the application from the command line...and demonstrates about how a user enters responses to all all of the prompts of the application for generating the summary HTML page of the entered information. The video last shows the generated HTML page file that matches the user input.

![an link to the application usage demo video](./assets/images/)

|
[ Application Components ]
|

The application has the following primary directory structure:

    .                          // base/parent directory
    |
    ├──__ tests __/            // jest tests
    |   |
    │   ├── Employee.test.js
    |   |
    │   ├── Engineer.test.js
    |   |
    │   ├── Intern.test.js
    |   |
    │   └── Manager.test.js
    |
    ├── dist/                  // rendered output (HTML) and CSS style sheet 
    |
    ├── lib/                   // classes
    |
    ├── src/                   // template helper code 
    |
    ├── .gitignore             // indicates which folders and files Git should ignore
    |
    ├── index.js               // runs the application
    |
    └── package.json    

Note: The "dist" sub-folder is removed from the .gitignore file so that the Git process tracks the folder and includes it when updated files are pushed up to the application repository.

The "__ tests __" directory contains the functionality tests that are for the application classes and all of the tests pass.

|
[ Data Storage Classes/Objects ]
|

The application has the following classes: Employee (parent class), Manager (sub-class), Engineer (sub-class), and Intern (sub-class). The 3 sub-classes extend the parent class.

The Employee class is the parent class that has the following properties and methods that are common to and shared by the other classes that are related sub-classes.

* name
* id
* email
* getName()
* getId()
* getEmail()
* getRole()  // job title

 The Manager sub-class has the following role-specific data properties and methods in addition to the inherited common properties and methods of the Employee parent class.

* officeNumber
* getRole()

The Engineer sub-class has the following role-specific data properties and methods in addition to the inherited common properties and methods of the Employee parent class.

* github  // GitHub username
* getGithub()
* getRole()  // job title

The Intern sub-class has the following role-specific data properties and methods in addition to the inherited common properties and methods of the Employee parent class.

* school
* getSchool()
* getRole()  // job title


## 2. Program Installation Information

Make sure that you have a GitHub membership and account to be able to view the repository of the assignment webpage system. The published GitHub Pages view of the website should be accessible on the public internet access URL without a need to have a GitHub membership/account.

IMPORTANT/REQUIRED: After when the repository has been cloned/downloaded to a local computer directory from the main GitHub location...make sure that the node.js system software and the npm (node package manager) system software is installed...and then type the node npm command "npm i" in the clone directory to trigger an auto-installation of the additional npm module sub-programs that are required for this application to be able to function. Or if that auto-install does not occur...then the additional modules can be individually manually installed by using the "npm install < module name > < version number >" command in a console window of the clone directory. Refer to the appropriate system website documentation for additional information.

    DEPENDENCY INFORMATION OF THE "PACKAGE.JSON" FILE

    "name": "tk-team-employee-information-profile-webpage-generator",
    "version": "1.0.0",
    "description": "This program is a console application that uses several Inquirer prompt sequences to gather from/for a team leader/manager some general employee profile information that is applicable to their team; and then the program upon exit of the prompt process generates a dynamic HTML webpage that shows a graphical view of the team employee information profile.",
    "main": "index.js", 
    "directories": {
        "lib": "lib"
    },
    ----
    "dependencies": {
        "fs": "current version",
        "inquirer": "8.2.4",
        "open": "current version"
    },
    ----
    "devDependencies": {
        "jest": "^29.3.1"
    },
    "scripts": {
        "test": "jest", 
        "start": "index.js" 
    },
    "author": "Todd Kridel",
    "license": "MIT"


## 3. Program Usage Information

To use this application...

1. Type the command "node index" or "npm start" to start the console prompt process to generate the employee information profile webpage.

2. Answer the prompts as-desired.

3. View the resulting dynamically-generated HTML webpage that displays the involved input data about a team of employees.

The following picture shows the appearance of the application console application and the resulting generated HTML webpage:

![an example view of the appearance of the webpage](./assets/images/Challenge%2010%20mockup.png)

The following URL is for the GitHub Pages published public view of Todd Kridel's Coding Bootcamp Module 10 Challenge assignment "Team Employee Information Profile Webpage Generator": "https://todd-kridel.github.io//".


## 4. Program Credits/Contributors

NA


## 5. Program Test Information

The application uses the npm Jest module for running the code unit functional tests.

SUCCESSFULLY TESTED -- ALL UNITS (as shown in the following image and included in the usage demo video)

![a view of the successful passing automated Jest functional tests](./assets/images/All%20Class%20Unit%20Tests%20Passed.png)


## 6. Program Questions

Email Address: todd.kridel@gmail.com

GitHub User Name: https://github.com/Todd-Kridel


## 7. Program License Information

MIT License   

![a license icon](./assets/images/License_Badge__The_MIT_License.jpg)

Copyright (c) 2022 DU Full-Stack Web Development Coding Boot Camp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

