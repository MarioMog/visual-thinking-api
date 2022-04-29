const Reader= require("./../utils/Reader");
const StudentService= require("./../services/StudentService");
class StudentController{
    static getAllStudents(){
        return Reader.readJsonFile("visualpartners.json");
    }
    static getStudentsHaveCertification(students){
        return StudentService.filterStudentsByCertification(students);
    }
    static getStudentsHaveCreditsOver500(students){
        return StudentService.filterByCreditsOver500(students);
    }
}
module.exports=StudentController;