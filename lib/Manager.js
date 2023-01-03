

// Manager Sub-Class:

const Employee = require("./Employee");

class Manager extends Employee { 
constructor(name, id, emailAddress, officeNumber) {
//
// properties
//
super(name, id, emailAddress);
this.officeNumber = officeNumber;
}
//
// methods
//
getOfficeNumber() {
return this.officeNumber;
}
getRole() {
return this.constructor.name;  // or return "Manager";
}
//
}


// exported module code

module.exports = Manager;

