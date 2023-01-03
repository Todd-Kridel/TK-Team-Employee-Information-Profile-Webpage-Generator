
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


// Manager Sub-Class:

// class Manager extends Employee { 
// constructor(officeNumber) {
// //
// // properties
// //
// this.officeNumber = officeNumber;
// }
// //
// // methods
// //
// getRole() {
// return this.getClassName();  // or return "Manager";
// }
// //
// }
