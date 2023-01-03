

const Intern = require("../lib/Intern.js");

describe("Intern Sub-Class Testing", () => {
  describe("Intern Sub-Class Initialization", () => {
  it("Should create an object that contains the correct passed-in values that are for " + 
    "school...and then also the name, ID, and email address values that are for the " + 
    "Employee parent class...when the constructor is called with the 'new' keyword " + 
    "and the corresponding property initial-value arguments.", () => {
    //
    const testIntern = new Intern("Test", "1234", "test@email.com", 
      "Denver University (DU)");
    //
    expect(testIntern.name).toEqual("Test");
    expect(testIntern.id).toEqual("1234");
    expect(testIntern.emailAddress).toEqual("test@email.com");
    expect(testIntern.school).toEqual("Denver University (DU)");
  });
  });
  describe("Intern Sub-Class Methods", () => {
  it("Should return the correct values that are for name, ID, email address, office " + 
    "number, and role properties when the corresponding 'get' functions are called.", () => {
    const testIntern = new Intern("Test", "1234", "test@email.com", 
      "Denver University (DU)");
    //
    expect(typeof testIntern.getName).toBe("function");
    expect(testIntern.getName()).toEqual("Test");
    //
    expect(typeof testIntern.getId).toBe("function");
    expect(testIntern.getId()).toEqual("1234");
    //
    expect(typeof testIntern.getEmailAddress).toBe("function");
    expect(testIntern.getEmailAddress()).toEqual("test@email.com");
    //
    expect(typeof testIntern.getSchool).toBe("function");
    expect(testIntern.getSchool()).toEqual("Denver University (DU)");
    //
    expect(typeof testIntern.getRole).toBe("function");
    expect(testIntern.getRole()).toEqual("Intern");
  });
  });
});


// Intern class:

// const Employee = require("./Employee");

// class Intern extends Employee { 
// constructor(name, id, emailAddress, school) {
// //
// // properties
// //
// super(name, id, emailAddress);
// this.school = school;
// }
// //
// // methods
// //
// getSchool() {
// return this.school;
// }
// getRole() {
// return this.constructor.name;  // or return "Intern";
// }
// //
// }
