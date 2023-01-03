

// Engineer Sub-Class:

const Employee = require("./Employee");

class Engineer extends Employee { 
constructor(name, id, emailAddress, githubUserName) {
//
// properties
//
super(name, id, emailAddress);
this.githubUserName = githubUserName;
}
//
// methods
//
getGitHub() {
return this.githubUserName;
}
getRole() {
return this.constructor.name;  // or return "Engineer";
}
//
}


// exported module code

module.exports = Engineer;

