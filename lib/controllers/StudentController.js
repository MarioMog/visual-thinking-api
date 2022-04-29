const Reader= require("./../utils/Reader");
const StudentService= require("./../services/StudentService");
class StudentController{
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getAllStudents(students);
    }
    static getStudentsHaveCertification(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.filterStudentsByCertification(students);
    }
    static getStudentsHaveCreditsOver500(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.filterByCreditsOver500(students);
    }
}
module.exports=StudentController;