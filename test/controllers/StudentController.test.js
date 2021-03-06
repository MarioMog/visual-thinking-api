const StudentController = require("../../lib/controllers/StudentController");
const Reader = require("../../lib/utils/Reader");

describe("Suit test for StudentController", () => {
    test("1) Getting all students", () => {
        const res = StudentController.getAllStudents();
        expect(res.length).toBe(51);
    });
    test("2) Getting students that have certificacion", () => {
        const res = StudentController.getStudentsHaveCertification();
        expect(res.length).toBe(29);
    });
    test("3) Getting students that have over 500cr empty array", () => {
        const res = StudentController.getStudentsHaveCreditsOver500();
        expect(res.length).toBe(27);
    });
});
