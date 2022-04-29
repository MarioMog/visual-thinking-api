const Reader= require("./../utils/Reader")
const StudentService= require("./../services/StudentService")
class StudentController{
  static getAllStudents(){
    return Reader.readJsonFile("visualpartners.json")
  }
  static getStudentsHaveCertification(students){
    return StudentService.filterStudentsByCertification(students)
  }
}
module.exports=StudentController