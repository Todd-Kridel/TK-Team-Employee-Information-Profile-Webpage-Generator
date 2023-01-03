

// Intern class:

const Employee = require("./Employee");

class Intern extends Employee { 
constructor(name, id, emailAddress, school) {
//
// properties
//
super(name, id, emailAddress);
this.school = school;
}
//
// methods
//
getSchool() {
return this.school;
}
getRole() {
return this.constructor.name;  // or return "Intern";
}
//
}


// exported module code

module.exports = Intern;

