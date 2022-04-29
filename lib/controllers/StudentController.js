const Reader= require("./../utils/Reader");
const StudentService= require("./../services/StudentService");
class StudentController{
    static getAllStudents(){
        return Reader.readJsonFile("visualpartners.json");
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