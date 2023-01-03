

const Engineer = require("../lib/Engineer.js");

describe("Engineer Sub-Class Testing", () => {
  describe("Engineer Sub-Class Initialization", () => {
  it("Should create an object that contains the correct passed-in values that are for " + 
    "GitHub user name...and then also the name, ID, and email address values that are " + 
    "for the Employee parent class...when the constructor is called with the 'new' " + 
    "keyword and the corresponding property initial-value arguments.", () => {
    //
    const testEngineer = new Engineer("Test", "1234", "test@email.com", "Test-Tester");
    //
    expect(testEngineer.name).toEqual("Test");
    expect(testEngineer.id).toEqual("1234");
    expect(testEngineer.emailAddress).toEqual("test@email.com");
    expect(testEngineer.githubUserName).toEqual("Test-Tester");
  });
  });
  describe("Engineer Sub-Class Methods", () => {
  it("Should return the correct values that are for name, ID, email address, GitHub " + 
    "user name, and role properties when the corresponding 'get' functions are " + 
    "called.", () => {
    const testEngineer = new Engineer("Test", "1234", "test@email.com", "Test-Tester");
    //
    expect(typeof testEngineer.getName).toBe("function");
    expect(testEngineer.getName()).toEqual("Test");
    //
    expect(typeof testEngineer.getId).toBe("function");
    expect(testEngineer.getId()).toEqual("1234");
    //
    expect(typeof testEngineer.getEmailAddress).toBe("function");
    expect(testEngineer.getEmailAddress()).toEqual("test@email.com");
    //
    expect(typeof testEngineer.getGitHub).toBe("function");
    expect(testEngineer.getGitHub()).toEqual("Test-Tester");
    //
    expect(typeof testEngineer.getRole).toBe("function");
    expect(testEngineer.getRole()).toEqual("Engineer");
  });
  });
});


// Engineer Sub-Class:

// const Employee = require("./Employee");

// class Engineer extends Employee { 
// constructor(name, id, emailAddress, githubUserName) {
// //
// // properties
// //
// super(name, id, emailAddress);
// this.githubUserName = githubUserName;
// }
// //
// // methods
// //
// getGitHub() {
// return this.githubUserName;
// }
// getRole() {
// return this.constructor.name;  // or return "Engineer";
// }
// //
// }
