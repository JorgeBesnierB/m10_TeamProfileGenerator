const Manager = require("../lib/manager");

describe("manager", () => {
    //###################################################################################    
    it("Manager object", () => {
        // Arrangement
        const managerTest = new Manager();
        // Assertion
        expect(typeof(managerTest)).toBe("object");
    });

    //###################################################################################    
    it("should return a manager with an Office Number object property", () => {
        // Arrangement
        const officeNumber = "1";
        // Action
        const managerTest = new Manager("Jorge","3034668","jorgebesnierb@outlook.com", officeNumber);
        // Assertion
        expect(managerTest.officeNumber).toBe(officeNumber);
    });
    
    //###################################################################################    
    it("Get Office Method", () => { 
        // Arrangement
        const officeNumber = "1";
        // Action
        const managerTest = new Manager("Jorge","3034668","jorgebesnierb@outlook.com", officeNumber);
        // Assertion
        expect(managerTest.getOfficeNumber()).toBe(officeNumber);
      });

    //###################################################################################    
    it("GetRole Method", () => { 
        // Arrangement
        const managerTest = new Manager("Jorge","3034668","jorgebesnierb@outlook.com", "1");
        // Assertion
        expect(managerTest.getRole()).toBe("Manager");
    });

});