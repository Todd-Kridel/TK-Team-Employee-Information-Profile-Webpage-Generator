
// const <class name to be tested> = require("");
// describe("<class/function name to be tested"), () => {
//   describe("Initialization", () => {  // for a constructor function
//     it("<descriptive purpose text>", () => {
//       const <test object variable name> = new <class to be tested>();
//       expect("<instance description text>" in <test object>).toEqual(<value>);
//       });
//     }
//     it("<descriptive purpose text>", () => {
//       const <test object variable name> = new <class to be tested>();
//       expect("<instance description text>" in <test object>).toEqual(<value>);
//       });
//     }
//     it("<descriptive purpose text>", () => {
//       const <test object variable name> = new <class to be tested>();
//       expect("<instance description text>" in <test object>).toEqual(<value>);
//       });
//     }
//     ...
//   }
//   ...
// }
// ...

// expect(typeof <type variable (from previous instantiation)>).toEqual("<type>");
// expect(<object>.<property>).toEqual(<value>,...);


// Mock:
// const mock = jest.spyOn(<object to test>, "<method action to test>");
// mock.mockImplementation( () => { <desired response action[s]/statement[s] } );
// expect(mock).toBeCalledWith(<condition>, <message variable>);
// mock.<method action to test>("");
// mock.mockRestore();
// jest.mock("<system to test>");


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
// getEmail() {
// return this.email;
// }
// getRole() {
// return this.constructor.name;  // or return "Employee";
// }
// //
// }
