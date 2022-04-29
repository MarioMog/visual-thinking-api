const Reader= require("./../utils/Reader")
class StudentController{
  static getAllStudents(){
    return Reader.readJsonFile("visualpartners.json")
  }
}
module.exports=StudentController