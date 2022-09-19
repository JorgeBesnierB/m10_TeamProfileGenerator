
const Engineer = require("../lib/engineer");

describe("engineer", () => {
    //###################################################################################
    it("Create Engineer Object", () => {
        // Arrangement
        const engineerTest = new Engineer();
        // Assertion
        expect(typeof(engineerTest)).toBe("object");
      });
    
    //###################################################################################
    it("Engineer Github", () => {
        // Arrangement
        const gitHub = "jbesnier";
        //Action
        const engineerTest = new Engineer("Jorge", "3034668", "jorgebesnierb@outlook.com",gitHub);
        // Assertion
        expect(engineerTest.gitHub).toBe(gitHub);
      });
    
    //###################################################################################
    it("GitHub Method", () => { 
        // Arrangement
        const gitHub = "jbesnier";
        //Action
        const engineerTest = new Engineer("Jorge", "3034668", "jorgebesnierb@outlook.com",gitHub);
        // Assertion
        expect(engineerTest.getGitHub()).toBe(gitHub);
    });

    //###################################################################################
    it("GetRole Method", () => { 
        // Arrangement
        const engineerTest = new Engineer("Jorge", "3034668", "jorgebesnierb@outlook.com",'jbesnier');
        // Assertion
        expect(engineerTest.getRole()).toBe("Engineer");
      });
});