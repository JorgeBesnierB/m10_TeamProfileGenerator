const Employee = require("../lib/employee");

describe("employee", () => {
  //###################################################################################
  it("Create Employee Object", () => {
    // Arrangement
    const employeeTest = new Employee();
    // Assertion
    expect(typeof(employeeTest)).toBe("object");
  });

  //###################################################################################
  it("Name Property", () => { 
    // Arrangement
    const name = "Jorge";
    // Action
    const employeeTest = new Employee(name);
    // Assertion
    expect(employeeTest.name).toBe(name);
  });

  //###################################################################################
  it("ID Property", () => { 
    // Arrangement
    const id = "3034668";
    // Action
    const employeeTest = new Employee("Jorge",id);
    // Assertion
    expect(employeeTest.id).toBe(id);
  });
  
  //###################################################################################
  it("Email Property", () => { 
    // Arrangement
    const email = "jorgebesnierb@outlook.com";
    // Action
    const employeeTest = new Employee("Jorge","3034668",email);
    // Assertion
    expect(employeeTest.email).toBe(email);
   });
    
  //##################################################################################
  it("GetName Method", () => { 
    // Arrangement
    const name = "Jorge";
    // Action
    const employeeTest = new Employee(name);
    // Assertion
    expect(employeeTest.getName()).toBe(name);
  });
    
  //###################################################################################
  it("GetId Method", () => { 
    // Arrangement
    const id = "3034668";
    // Action
    const employeeTest = new Employee("Jorge", id);
    // Assertion
    expect(employeeTest.getId()).toBe(id);
  });

  //###################################################################################
  it("GetInfo Method", () => { 
    // Arrangement
    const email = "jorgebesnierb@outlook.com";
    // Action
    const employeeTest = new Employee("Jorge","3034668",email);
    // Assertion
    expect(employeeTest.getInfo()).toBe(email);
  });

  //###################################################################################
  it("GetRole Method ", () => { 
    // Arrangement
    const employeeTest = new Employee("Jorge","3034668","jorgebesnierb@outlook.com");
    // Assertion
    expect(employeeTest.getRole()).toBe("Employee");
  });
});
