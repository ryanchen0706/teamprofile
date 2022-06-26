const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "ryanchen0706";
    const employeeInstance = new Engineer("Ryan", 2, "rsyc2010@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "ryanchen0706";
    const employeeInstance = new Engineer("Ryan", 2, "rsyc2010@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Ryan", 2, "rsyc2010@gmail.com", "ryanchen0706");
    expect(employeeInstance.getRole()).toBe(returnValue);
});