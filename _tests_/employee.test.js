

const Employee = require("../lib/Employee.js");

describe("Employee Class Testing", () => {
  describe("Employee Class Initialization", () => {
  it("Should create an object that contains the correct passed-in values that are for " + 
    "name, ID, and email address when the constructor is called with the 'new' keyword " + 
    "and the corresponding property initial-value arguments.", () => {
    //
    const testEmployee = new Employee("Test", "1234", "test@email.com");
    //
    expect(testEmployee.name).toEqual("Test");
    expect(testEmployee.id).toEqual("1234");
    expect(testEmployee.emailAddress).toEqual("test@email.com");
  });
  });
  describe("Employee Class Methods", () => {
  it("Should return the correct values that are for name, ID, email address, and role " + 
    "properties when the corresponding 'get' functions are called.", () => {
    const testEmployee = new Employee("Test", "1234", "test@email.com");
    //
    expect(typeof testEmployee.getName).toBe("function");
    expect(testEmployee.getName()).toEqual("Test");
    //
    expect(typeof testEmployee.getId).toBe("function");
    expect(testEmployee.getId()).toEqual("1234");
    //
    expect(typeof testEmployee.getEmailAddress).toBe("function");
    expect(testEmployee.getEmailAddress()).toEqual("test@email.com");
    //
    expect(typeof testEmployee.getRole).toBe("function");
    expect(testEmployee.getRole()).toEqual("Employee");
  });
  });
});


// Employee Class:
// with employee-common properties and methods

// class Employee {
// constructor(name, id, email) {
// //
// // properties
// //
// this.name = name;
// this.id = id;
// this.email = email;
// }
// //
// // methods
// //
// getName() {
// return this.name;
// }
// getId() {
// return this.id;
// }
// getEmailAddress() {
// return this.email;
// }
// getRole() {
// return this.constructor.name;  // or return "Employee";
// }
// //
// }
