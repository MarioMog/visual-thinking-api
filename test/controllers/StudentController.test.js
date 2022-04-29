const StudentController = require("../../lib/controllers/StudentController");

describe("Suit test for StudentController", () => {
    test("1) Getting all students", () => {
        const res = StudentController.getAllStudents();
        expect(res.length).toBe(51);
    });
});
