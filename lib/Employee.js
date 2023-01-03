

// Employee Class:
// with employee-common properties and methods

class Employee {
constructor(name, id, emailAddress) {
//
// properties
//
this.name = name;
this.id = id;
this.emailAddress = emailAddress;
}
//
// methods
//
getName() {
return this.name;
}
getId() {
return this.id;
}
getEmailAddress() {
return this.emailAddress;
}
getRole() {
return this.constructor.name;  // or return "Employee";
}
//
}


// exported module code

module.exports = Employee;

