const Intern = require("../lib/intern");

describe("intern", () => {
    //###################################################################################
    it("Intern Object", () => {
        // Arrangement
        const internTest = new Intern();
        // Assertion
        expect(typeof(internTest)).toBe("object");
    });

    //###################################################################################    
    it("School Property", () => {
        // Arrangement
        const school = "ITESM";
        // Action
        const internTest = new Intern("Jorge","3034668","jorgebesnierb@outlook.com", school);
        // Assertion
        expect(internTest.school).toBe(school);
    });
    
    //###################################################################################
    it("GetSchool Method", () => { 
        // Arrangement
        const internTest = new Intern("Jorge","3034668","jorgebesnierb@outlook.com", "ITESM");
        // Assertion
        expect(internTest.getSchool()).toBe("ITESM");
    });

    //###################################################################################
    it("GetRole Method", () => { 
        // Arrangement
        const internTest =  new Intern("Jorge","3034668","jorgebesnierb@outlook.com", "ITESM");
        // Assertion
        expect(internTest.getRole()).toBe("Intern");
    });


});
   
