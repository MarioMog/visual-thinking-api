const StudentController = require("../../lib/controllers/StudentController");
const Reader = require("../../lib/utils/Reader");

describe("Suit test for StudentController", () => {
    test("1) Getting all students", () => {
        const res = StudentController.getAllStudents();
        expect(res.length).toBe(51);
    });
    test("2) Getting students that have certificacion", () => {
        const studentsArray = Reader.readJsonFile("./test/services/visualpartnersCopy.json");
        
        const res = StudentController.getStudentsHaveCertification(studentsArray);
        expect(res.length).toBe(1);
    });
});
