

const Manager = require("../lib/Manager.js");

describe("Manager Sub-Class Testing", () => {
  describe("Manager Sub-Class Initialization", () => {
  it("Should create an object that contains the correct passed-in values that are for " + 
    "office number...and then also the name, ID, and email address values that are for " + 
    "the Employee parent class...when the constructor is called with the 'new' keyword " + 
    "and the corresponding property initial-value arguments.", () => {
    //
    const testManager = new Manager("Test", "1234", "test@email.com", "13");
    //
    expect(testManager.name).toEqual("Test");
    expect(testManager.id).toEqual("1234");
    expect(testManager.emailAddress).toEqual("test@email.com");
    expect(testManager.officeNumber).toEqual("13");
  });
  });
  describe("Manager Sub-Class Methods", () => {
  it("Should return the correct values that are for name, ID, email address, office " + 
    "number, and role properties when the corresponding 'get' functions are called.", () => {
    const testManager = new Manager("Test", "1234", "test@email.com", "13");
    //
    expect(typeof testManager.getName).toBe("function");
    expect(testManager.getName()).toEqual("Test");
    //
    expect(typeof testManager.getId).toBe("function");
    expect(testManager.getId()).toEqual("1234");
    //
    expect(typeof testManager.getEmailAddress).toBe("function");
    expect(testManager.getEmailAddress()).toEqual("test@email.com");
    //
    expect(typeof testManager.getOfficeNumber).toBe("function");
    expect(testManager.getOfficeNumber()).toEqual("13");
    //
    expect(typeof testManager.getRole).toBe("function");
    expect(testManager.getRole()).toEqual("Manager");
  });
  });
});


// Manager Sub-Class:

// const Employee = require("./Employee");

// class Manager extends Employee { 
// constructor(name, id, emailAddress, officeNumber) {
// //
// // properties
// //
// super(name, id, emailAddress);
// this.officeNumber = officeNumber;
// }
// //
// // methods
// //
// getOfficeNumber() {
// return this.officeNumber;
// }
// getRole() {
// return this.constructor.name;  // or return "Manager";
// }
// //
// }

