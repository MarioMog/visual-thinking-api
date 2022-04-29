const StudentService = require("../../lib/services/StudentService");
const Reader = require("../../lib/utils/Reader");

describe("Suit test for StudentService", () => {
    test("1.1) Getting students that have certification invalid typeof", () => {
        const studentsArray = 1;
        
        const res = StudentService.filterStudentsByCertification(studentsArray)
        expect(res).toMatch(/students should be an array/);
    });
    test("1.2) Getting students that have certification empty array", () => {
        const studentsArray = [];
        
        const res = StudentService.filterStudentsByCertification(studentsArray)
        expect(res).toMatch(/students cannot be an empty array/);
    });
    test("1.3) Getting students that have certification", () => {
        const studentsArray = Reader.readJsonFile("./test/services/visualpartnersCopy.json");
        
        const res = StudentService.filterStudentsByCertification(studentsArray)
        expect(res.length).toBe(1);
    });
});
